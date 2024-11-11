-- AlterTable
ALTER TABLE "books" ADD COLUMN     "authorId" TEXT;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors"("authorId") ON DELETE SET NULL ON UPDATE CASCADE;
