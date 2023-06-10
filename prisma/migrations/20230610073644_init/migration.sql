-- CreateTable
CREATE TABLE `race_results` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `driver` VARCHAR(250) NULL,
    `team` VARCHAR(250) NULL,
    `grandPrix` VARCHAR(250) NULL,
    `laps` VARCHAR(100) NULL,
    `time` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
