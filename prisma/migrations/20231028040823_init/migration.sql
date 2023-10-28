-- DropForeignKey
ALTER TABLE "CommentPost" DROP CONSTRAINT "CommentPost_commentToId_fkey";

-- AlterTable
ALTER TABLE "CommentPost" ALTER COLUMN "commentToId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CommentPost" ADD CONSTRAINT "CommentPost_commentToId_fkey" FOREIGN KEY ("commentToId") REFERENCES "CommentPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;
