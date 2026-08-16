-- Add missing Book fields to products table
ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "bookName" TEXT;
ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "author" TEXT;
ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "review" TEXT;
ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "totalPages" INTEGER;
ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "rating" DOUBLE PRECISION;
ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "publisher" TEXT;
ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "yearOfPublishing" INTEGER;

-- Copy existing title into bookName for existing rows
UPDATE "products" SET "bookName" = "title" WHERE "bookName" IS NULL;
