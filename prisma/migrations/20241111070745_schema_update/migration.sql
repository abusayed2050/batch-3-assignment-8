-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_authorId_fkey";

-- AlterTable
ALTER TABLE "books" ALTER COLUMN "authorId" DROP NOT NULL,
ALTER COLUMN "authorId" SET DEFAULT '0';

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors"("authorId") ON DELETE SET NULL ON UPDATE CASCADE;
