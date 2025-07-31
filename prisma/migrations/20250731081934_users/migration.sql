/*
  Warnings:

  - You are about to drop the `Leadstable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Leadstable`;

-- CreateTable
CREATE TABLE `leadstable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
