-- CreateTable
CREATE TABLE `Plant` (
    `id` VARCHAR(191) NOT NULL,
    `breed` VARCHAR(255) NOT NULL,
    `size` INTEGER NOT NULL,
    `needs_sun` BOOLEAN NOT NULL,
    `origin` VARCHAR(191) NOT NULL,
    `special_care_id` VARCHAR(191) NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Special_care` (
    `id` VARCHAR(191) NOT NULL,
    `water_frequency` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ops_info` (
    `id` VARCHAR(191) NOT NULL,
    `created_plants` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Plant` ADD CONSTRAINT `Plant_special_care_id_fkey` FOREIGN KEY (`special_care_id`) REFERENCES `Special_care`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
