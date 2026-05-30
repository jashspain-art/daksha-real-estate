import { PrismaClient } from "@prisma/client";
import { business, locationGroups } from "../src/lib/constants";
import { properties, faqs, testimonials } from "../src/lib/data";
import { slugify } from "../src/lib/utils";

const prisma = new PrismaClient();

async function main() {
  for (const group of locationGroups) {
    for (const name of group.locations) {
      await prisma.location.upsert({
        where: { slug: slugify(name) },
        update: {},
        create: {
          name,
          slug: slugify(name),
          region: group.region,
          summary: `${name} is a high-demand ${group.region} micro-market with strong connectivity, established social infrastructure, and reliable residential demand.`,
          seoTitle: `Properties in ${name}`,
          seoDescription: `Verified sale and rent properties in ${name} with Daksha Real Estate.`,
        },
      });
    }
  }

  for (const property of properties) {
    const location = await prisma.location.findUniqueOrThrow({ where: { slug: slugify(property.location) } });
    const dbProperty = await prisma.property.upsert({
      where: { publicId: property.id },
      update: {},
      create: {
        publicId: property.id,
        title: property.title,
        slug: property.slug,
        listingType: property.listingType,
        propertyType: property.propertyType,
        price: property.price,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        carpetArea: property.carpetArea,
        furnished: property.furnished,
        readyToMove: property.readyToMove,
        availability: property.availability,
        status: property.status.toUpperCase() as "AVAILABLE" | "SOLD" | "RENTED" | "RESERVED",
        overview: property.overview,
        exactAddress: property.sensitive.address,
        mapQuery: property.mapQuery,
        featured: property.featured,
        locationId: location.id,
      },
    });

    for (const [index, image] of property.images.entries()) {
      await prisma.propertyMedia.create({
        data: { propertyId: dbProperty.id, type: "IMAGE", url: image, alt: property.title, sortOrder: index },
      });
    }

    await prisma.propertyMedia.createMany({
      data: [
        { propertyId: dbProperty.id, type: "VIDEO", url: property.sensitive.video, locked: true, sortOrder: 20 },
        { propertyId: dbProperty.id, type: "FLOOR_PLAN", url: property.sensitive.floorPlan, locked: true, sortOrder: 21 },
        { propertyId: dbProperty.id, type: "BROCHURE", url: property.sensitive.brochure, locked: true, sortOrder: 22 },
      ],
    });

    await prisma.propertyAmenity.createMany({
      data: property.amenities.map((name) => ({ propertyId: dbProperty.id, name })),
    });
  }

  for (const [index, item] of testimonials.entries()) {
    await prisma.testimonial.create({ data: { ...item, sortOrder: index } });
  }

  for (const [index, [question, answer]] of faqs.entries()) {
    await prisma.faq.create({ data: { question, answer, sortOrder: index } });
  }

  await prisma.consultantProfile.create({
    data: {
      name: business.founder,
      bio: "Founder-led property advisory for verified residential sales and rentals across Mumbai and Navi Mumbai.",
      experience: "Residential sale and rental advisory",
      areasServed: business.markets.join(", "),
      whatsapp: business.whatsapp,
      phone: business.phone,
      imageUrl: "/founder-placeholder.svg",
    },
  });
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
