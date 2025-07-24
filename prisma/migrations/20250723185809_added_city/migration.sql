/*
  Warnings:

  - Added the required column `city` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Lead` ADD COLUMN `city` VARCHAR(255) NOT NULL;
