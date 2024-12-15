/*
  Warnings:

  - Added the required column `timeStamp` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "timeStamp" TIMESTAMP(3) NOT NULL;
