CREATE TYPE "ListingType" AS ENUM ('SALE', 'RENT');
CREATE TYPE "PropertyStatus" AS ENUM ('AVAILABLE', 'SOLD', 'RENTED', 'RESERVED');
CREATE TYPE "LeadType" AS ENUM ('GENERAL', 'PROPERTY_UNLOCK', 'SCHEDULE_VISIT');

CREATE TABLE "Location" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "region" TEXT NOT NULL,
  "summary" TEXT,
  "seoTitle" TEXT,
  "seoDescription" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Property" (
  "id" TEXT NOT NULL,
  "publicId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "listingType" "ListingType" NOT NULL,
  "propertyType" TEXT NOT NULL,
  "price" INTEGER NOT NULL,
  "bedrooms" INTEGER NOT NULL,
  "bathrooms" INTEGER NOT NULL,
  "carpetArea" INTEGER NOT NULL,
  "furnished" TEXT NOT NULL,
  "readyToMove" BOOLEAN NOT NULL DEFAULT false,
  "availability" TEXT NOT NULL,
  "status" "PropertyStatus" NOT NULL DEFAULT 'AVAILABLE',
  "overview" TEXT NOT NULL,
  "exactAddress" TEXT,
  "mapQuery" TEXT,
  "featured" BOOLEAN NOT NULL DEFAULT false,
  "locationId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "PropertyMedia" (
  "id" TEXT NOT NULL,
  "propertyId" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "alt" TEXT,
  "locked" BOOLEAN NOT NULL DEFAULT false,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "PropertyMedia_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "PropertyAmenity" (
  "id" TEXT NOT NULL,
  "propertyId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  CONSTRAINT "PropertyAmenity_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Lead" (
  "id" TEXT NOT NULL,
  "type" "LeadType" NOT NULL,
  "name" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "budget" TEXT,
  "message" TEXT,
  "preferredDate" TIMESTAMP(3),
  "propertyId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Testimonial" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "quote" TEXT NOT NULL,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Faq" (
  "id" TEXT NOT NULL,
  "question" TEXT NOT NULL,
  "answer" TEXT NOT NULL,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ConsultantProfile" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "bio" TEXT NOT NULL,
  "experience" TEXT NOT NULL,
  "areasServed" TEXT NOT NULL,
  "imageUrl" TEXT,
  "whatsapp" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "ConsultantProfile_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Location_slug_key" ON "Location"("slug");
CREATE UNIQUE INDEX "Property_publicId_key" ON "Property"("publicId");
CREATE UNIQUE INDEX "Property_slug_key" ON "Property"("slug");
ALTER TABLE "Property" ADD CONSTRAINT "Property_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "PropertyMedia" ADD CONSTRAINT "PropertyMedia_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "PropertyAmenity" ADD CONSTRAINT "PropertyAmenity_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("publicId") ON DELETE SET NULL ON UPDATE CASCADE;
