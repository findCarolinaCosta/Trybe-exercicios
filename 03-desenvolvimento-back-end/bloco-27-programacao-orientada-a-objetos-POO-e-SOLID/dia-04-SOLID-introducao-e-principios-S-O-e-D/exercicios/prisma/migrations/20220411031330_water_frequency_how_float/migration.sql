/*
  Warnings:

  - You are about to alter the column `water_frequency` on the `Special_care` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Special_care` MODIFY `water_frequency` DOUBLE NULL;
