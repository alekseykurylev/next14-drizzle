-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `catalog_clarification_action` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`request_id` int(11),
	`code` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`url` varchar(255) NOT NULL,
	`priority` int(11),
	`allow_role` longtext,
	`allow_role_except` longtext,
	`allow_permission` longtext,
	`allow_permission_except` longtext,
	`allow_clarification_status` longtext,
	`allow_clarification_status_except` longtext,
	`allow_organization` longtext,
	`style` varchar(255),
	`opened_at` datetime,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	`type` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `catalog_clarification_event` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`request_id` int(11),
	`publication_datetime` datetime,
	`name` longtext,
	`url` longtext,
	`canceled` tinyint,
	`allow_role` longtext,
	`allow_organization` longtext,
	`guid` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	`type` varchar(255) NOT NULL,
	`event_type` varchar(255)
);
--> statement-breakpoint
CREATE TABLE `catalog_clarification_interaction` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`request_id` int(11),
	`member_id` int(11),
	`organization_id` int(11),
	`is_read` tinyint,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`deleted_at` datetime,
	`type` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `catalog_clarification_request` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`status_id` int(11) NOT NULL,
	`type_id` int(11) NOT NULL,
	`lot_guid` varchar(255) NOT NULL,
	`lot_id` int(11) NOT NULL,
	`lot_subject` longtext,
	`lot_ordinal_number` int(11) NOT NULL,
	`lot_url_vsrz` varchar(255) NOT NULL,
	`procedure_guid` varchar(255) NOT NULL,
	`procedure_id` int(11) NOT NULL,
	`procedure_name` longtext NOT NULL,
	`procedure_type` varchar(255) NOT NULL,
	`procedure_url_vsrz` varchar(255) NOT NULL,
	`procedure_registration_number` varchar(255) NOT NULL,
	`organization_guid` varchar(255) NOT NULL,
	`organization_id` int(11) NOT NULL,
	`organization_full_name` longtext NOT NULL,
	`organization_short_name` longtext,
	`organization_inn` varchar(255) NOT NULL,
	`organization_kpp` varchar(255),
	`organization_ogrn` varchar(255),
	`organization_role` varchar(255) NOT NULL,
	`subject` longtext,
	`number` varchar(255),
	`publication_datetime` datetime,
	`regulated_datetime` datetime,
	`archive` tinyint DEFAULT 0,
	`guid` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`deleted_at` datetime,
	`type` varchar(255) NOT NULL,
	`url` varchar(255)
);
--> statement-breakpoint
CREATE TABLE `catalog_clarification_status` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255),
	CONSTRAINT `UNIQ_2570563F77153098` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `catalog_clarification_type` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255),
	CONSTRAINT `UNIQ_979965C177153098` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `catalog_contract` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`status_id` int(11) NOT NULL,
	`registration_number` varchar(255),
	`ordinal_number` int(11) NOT NULL,
	`lot_guid` varchar(255) NOT NULL,
	`lot_id` int(11) NOT NULL,
	`lot_subject` longtext NOT NULL,
	`lot_ordinal_number` int(11) NOT NULL,
	`lot_url_vsrz` varchar(255) NOT NULL,
	`procedure_guid` varchar(255) NOT NULL,
	`procedure_id` int(11) NOT NULL,
	`procedure_name` longtext NOT NULL,
	`procedure_url_vsrz` varchar(255) NOT NULL,
	`procedure_registration_number` varchar(255) NOT NULL,
	`procedure_type` varchar(255),
	`customer_guid` varchar(255) NOT NULL,
	`customer_id` int(11) NOT NULL,
	`customer_full_name` longtext NOT NULL,
	`customer_short_name` longtext,
	`customer_inn` varchar(255) NOT NULL,
	`customer_kpp` varchar(255) NOT NULL,
	`customer_ogrn` varchar(255) NOT NULL,
	`customer_role` varchar(255) NOT NULL,
	`supplier_guid` varchar(255) NOT NULL,
	`supplier_id` int(11) NOT NULL,
	`supplier_full_name` longtext NOT NULL,
	`supplier_short_name` longtext,
	`supplier_inn` varchar(255) NOT NULL,
	`supplier_kpp` varchar(255),
	`supplier_ogrn` varchar(255),
	`supplier_role` varchar(255) NOT NULL,
	`price` decimal(31,11),
	`agreement_price` decimal(20,2),
	`price_without_preference` decimal(20,2),
	`currency_Id` int(11) NOT NULL,
	`execution_requirement` tinyint NOT NULL,
	`use_preference` tinyint NOT NULL,
	`active` tinyint NOT NULL,
	`version` int(11) NOT NULL,
	`regulated_datetime` datetime,
	`formation_sign_datetime` datetime,
	`supplier_sign_datetime` datetime,
	`customer_sign_datetime` datetime,
	`guid` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	`type` varchar(255) NOT NULL,
	`start_price` double,
	`conclude_contract_right` tinyint DEFAULT 0,
	`max_price_decrease` decimal(30,11),
	`saving` decimal(22,2),
	`calculated_deviation_date` date
);
--> statement-breakpoint
CREATE TABLE `catalog_contract_action` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`contract_id` int(11) NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`url` varchar(255) NOT NULL,
	`priority` int(11),
	`allow_role` longtext,
	`allow_role_except` longtext,
	`allow_permission` longtext,
	`allow_permission_except` longtext,
	`allow_contract_status` longtext,
	`allow_contract_status_except` longtext,
	`allow_organization` longtext,
	`style` varchar(255),
	`opened_at` datetime,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime
);
--> statement-breakpoint
CREATE TABLE `catalog_contract_agreement` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`contract_id` int(11) NOT NULL,
	`status_id` int(11) NOT NULL,
	`guid` varchar(255) NOT NULL,
	`version` int(11) NOT NULL,
	`number` varchar(255),
	`price` decimal(20,2) NOT NULL,
	`outside_etp` tinyint NOT NULL,
	`is_finish` tinyint NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime
);
--> statement-breakpoint
CREATE TABLE `catalog_contract_agreement_event` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`agreement_id` int(11),
	`publication_datetime` datetime,
	`name` longtext,
	`url` longtext,
	`allow_role` longtext,
	`allow_organization` longtext,
	`guid` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime
);
--> statement-breakpoint
CREATE TABLE `catalog_contract_agreement_status` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255)
);
--> statement-breakpoint
CREATE TABLE `catalog_contract_event` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`contract_id` int(11),
	`publication_datetime` datetime,
	`name` longtext,
	`url` longtext,
	`canceled` tinyint,
	`allow_role` longtext,
	`allow_organization` longtext,
	`guid` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	`type` varchar(255)
);
--> statement-breakpoint
CREATE TABLE `catalog_contract_status` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255)
);
--> statement-breakpoint
CREATE TABLE `catalog_organization_parameter` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`value` longtext NOT NULL,
	`organization_id` int(11) NOT NULL,
	`organization_guid` varchar(36) NOT NULL,
	`user_id` int(11),
	`user_guid` varchar(36),
	`created_at` datetime NOT NULL,
	`updated_at` datetime
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`status_id` int(11) NOT NULL,
	`type_id` int(11) NOT NULL,
	`parent_id` int(11),
	`name` longtext,
	`registration_number` varchar(255),
	`version` int(11),
	`publication_datetime` datetime,
	`modification_datetime` datetime,
	`placer_id` int(11) NOT NULL,
	`placer_full_name` longtext,
	`placer_short_name` longtext,
	`placer_inn` varchar(255),
	`placer_kpp` varchar(255),
	`placer_ogrn` varchar(255),
	`placer_guid` varchar(255),
	`placer_role` varchar(255),
	`placer_region_id` int(11),
	`oos_guid` varchar(255),
	`etp_id` int(11) NOT NULL,
	`guid` varchar(255) NOT NULL,
	`url_oos` varchar(255),
	`url_vsrz` varchar(255),
	`is_joint_market` tinyint,
	`is_for_spare_parts` tinyint,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	`type` varchar(255) NOT NULL,
	`specialized_organization_id` int(11),
	`specialized_organization_full_name` longtext,
	`specialized_organization_short_name` longtext,
	`specialized_organization_inn` varchar(255),
	`specialized_organization_kpp` varchar(255),
	`specialized_organization_ogrn` varchar(255),
	`specialized_organization_guid` varchar(255),
	`specialized_organization_role` varchar(255),
	`specialized_organization_region_id` int(11),
	`customers_access_control` longtext,
	`abandoned_reason` varchar(50),
	`not_published_on_eis` tinyint,
	`plan_type_id` int(11)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_complaint` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`procedure_registration_number` varchar(100) NOT NULL,
	`complaint_type` varchar(50) NOT NULL,
	`controlling_organization_id` int(11),
	`created_at` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_favourite` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lot_id` int(11),
	`member_id` int(11) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_feature` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`type_id` int(11),
	`procedure_id` int(11),
	`lot_id` int(11),
	`deleted_at` datetime
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_feature_type` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`title` longtext NOT NULL,
	`category` varchar(50)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_integration_packet` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`type_id` int(11),
	`status_id` int(11),
	`guid` varchar(255),
	`object_id` varchar(255),
	`real_name` longtext,
	`title` longtext,
	`uri` longtext,
	`hash` varchar(100),
	`description` longtext,
	`create_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`update_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	CONSTRAINT `UNIQ_D2DC46C72B6FCFB2` UNIQUE(`guid`)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_integration_packet_status` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `UNIQ_92D029A177153098` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_integration_packet_type` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `UNIQ_32C7FD177153098` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_lot` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`status_id` int(11) NOT NULL,
	`procedure_id` int(11),
	`parent_id` int(11),
	`version` int(11),
	`ordinal_number` int(11),
	`subject` longtext,
	`request_start_give_datetime` datetime,
	`request_end_give_datetime` datetime,
	`request_review_end_datetime` datetime,
	`trade_start_datetime` datetime,
	`trade_end_datetime` datetime,
	`regulated_datetime` datetime,
	`contract_start_price` double,
	`contract_start_price_currency_Id` int(11),
	`is_joint_market` tinyint,
	`is_for_spare_parts` tinyint,
	`url_vsrz` varchar(255),
	`oos_guid` varchar(255),
	`etp_id` int(11) NOT NULL,
	`guid` varchar(255) NOT NULL,
	`additional_information` longtext,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	`type` varchar(255) NOT NULL,
	`is_contract_blocked` tinyint DEFAULT 0,
	`contract_formation_datetime` datetime,
	`ikz` longtext,
	`contract_start_price_spare_parts` double,
	`is_drugs` tinyint,
	`has_request_provision` tinyint,
	`has_contract_provision` tinyint
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_lot_action` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lot_id` int(11) NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`url` varchar(255) NOT NULL,
	`priority` int(11),
	`allow_role` longtext,
	`allow_role_except` longtext,
	`allow_permission` longtext,
	`allow_permission_except` longtext,
	`allow_lot_status` longtext,
	`allow_lot_status_except` longtext,
	`allow_request_status` longtext,
	`allow_request_status_except` longtext,
	`allow_organization` longtext,
	`style` varchar(255),
	`opened_at` datetime,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	`secondary_name` varchar(255),
	`secondary_priority` int(11),
	`is_secondary_head_action` tinyint
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_lot_customer` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lot_id` int(11) NOT NULL,
	`organization_id` int(11) NOT NULL,
	`organization_full_name` longtext,
	`organization_short_name` longtext,
	`organization_inn` varchar(255),
	`organization_kpp` varchar(255),
	`organization_ogrn` varchar(255),
	`organization_guid` varchar(255),
	`organization_role` varchar(255),
	`organization_region_id` int(11),
	`delivery_region_id` int(11),
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	`ikz` varchar(255)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_lot_event` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lot_id` int(11),
	`publication_datetime` datetime,
	`name` longtext,
	`url` longtext,
	`canceled` tinyint,
	`allow_role` longtext,
	`allow_organization` longtext,
	`guid` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	`style` varchar(255),
	`event_type` varchar(255)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_lot_item` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lot_id` int(11) NOT NULL,
	`lot_customer_id` int(11),
	`ordinal_number` int(11),
	`okpd2_id` int(11),
	`deleted_at` datetime,
	`type_id` int(11)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_lot_item_type` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(50) NOT NULL,
	`name` varchar(100) NOT NULL,
	`active` tinyint NOT NULL
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_lot_observer` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lot_id` int(11),
	`organization_id` int(11) NOT NULL,
	`deleted_at` datetime
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_lot_responsible_officer` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lot_id` int(11) NOT NULL,
	`organization_id` int(11) NOT NULL,
	`deleted_at` datetime,
	`responsible_officer_id` int(11)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_request` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`status_id` int(11) NOT NULL,
	`additional_status_id` int(11),
	`lot_id` int(11),
	`parent_id` int(11),
	`send_datetime` datetime,
	`organization_id` int(11) NOT NULL,
	`organization_full_name` longtext,
	`organization_short_name` longtext,
	`organization_inn` varchar(255),
	`organization_kpp` varchar(255),
	`organization_ogrn` varchar(255),
	`organization_guid` varchar(255),
	`organization_role` varchar(255),
	`organization_region_id` int(11),
	`guid` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	`spec_account` varchar(20),
	`application_number` int(11),
	`country_goods` longtext
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_responsible_officer` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`first_name` varchar(300) NOT NULL DEFAULT '',
	`last_name` varchar(300) NOT NULL DEFAULT '',
	`middle_name` varchar(300) NOT NULL DEFAULT '',
	`email` varchar(255) NOT NULL DEFAULT '',
	`member_id` int(11)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_status` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255),
	`type` varchar(255) NOT NULL,
	CONSTRAINT `Catalog_Procedure_StatusCodeTypeUniq` UNIQUE(`code`,`type`)
);
--> statement-breakpoint
CREATE TABLE `catalog_procedure_type` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`abbreviation` varchar(255) NOT NULL,
	`orderPriority` int(11)
);
--> statement-breakpoint
CREATE TABLE `catalog_sphinx_delta_counter` (
	`index_name` varchar(255) NOT NULL,
	`counter` int(11) NOT NULL,
	`datetime` datetime NOT NULL,
	CONSTRAINT `index_name` UNIQUE(`index_name`)
);
--> statement-breakpoint
CREATE TABLE `doctrine_migration_versions` (
	`version` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `integration_catalog_packet` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`type_id` int(11),
	`status_id` int(11),
	`guid` varchar(255),
	`object_id` varchar(255),
	`real_name` longtext,
	`title` longtext,
	`uri` longtext,
	`hash` varchar(100),
	`description` longtext,
	`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
	`updated_at` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	CONSTRAINT `UNIQ_4E24CD912B6FCFB2` UNIQUE(`guid`)
);
--> statement-breakpoint
CREATE TABLE `integration_catalog_packet_status` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `UNIQ_297054B777153098` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `integration_catalog_packet_type` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `UNIQ_E80493FE77153098` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `organization_procedure_regulated_datetime` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`procedure_id` int(11),
	`organization` varchar(255) NOT NULL,
	`regulated_datetime` datetime
);
--> statement-breakpoint
CREATE TABLE `procedure_access` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_operator_id` int(11),
	`user_operator_guid` varchar(255),
	`user_id` int(11),
	`user_guid` varchar(255),
	`active` tinyint NOT NULL,
	`create_datetime` datetime,
	`procedure_number` varchar(255),
	`procedure_type` varchar(10),
	`procedure_id` int(11),
	`placer_inn` varchar(50)
);
--> statement-breakpoint
CREATE INDEX `IDX_19BCBFB1427EB8A5` ON `catalog_clarification_action` (`request_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_ActionCode` ON `catalog_clarification_action` (`code`);--> statement-breakpoint
CREATE INDEX `IDX_956427DF427EB8A5` ON `catalog_clarification_event` (`request_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_EventGuid` ON `catalog_clarification_event` (`guid`);--> statement-breakpoint
CREATE INDEX `IDX_23BBE7B6427EB8A5` ON `catalog_clarification_interaction` (`request_id`);--> statement-breakpoint
CREATE INDEX `Clarification_Organization_Action_Member` ON `catalog_clarification_interaction` (`member_id`);--> statement-breakpoint
CREATE INDEX `Clarification_Organization_Action_Organization` ON `catalog_clarification_interaction` (`organization_id`);--> statement-breakpoint
CREATE INDEX `IDX_99AE8EDE6BF700BD` ON `catalog_clarification_request` (`status_id`);--> statement-breakpoint
CREATE INDEX `IDX_99AE8EDEC54C8C93` ON `catalog_clarification_request` (`type_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_Number` ON `catalog_clarification_request` (`number`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_OrganizationGuid` ON `catalog_clarification_request` (`organization_guid`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_OrganizationId` ON `catalog_clarification_request` (`organization_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_OrganizationInn` ON `catalog_clarification_request` (`organization_inn`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_OrganizationKpp` ON `catalog_clarification_request` (`organization_kpp`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_OrganizationOgrn` ON `catalog_clarification_request` (`organization_ogrn`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_LotGuid` ON `catalog_clarification_request` (`lot_guid`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_LotId` ON `catalog_clarification_request` (`lot_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_ProcedureGuid` ON `catalog_clarification_request` (`procedure_guid`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_ProcedureId` ON `catalog_clarification_request` (`procedure_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_ProcedureType` ON `catalog_clarification_request` (`procedure_type`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_ProcedureRegistrationNumber` ON `catalog_clarification_request` (`procedure_registration_number`);--> statement-breakpoint
CREATE INDEX `Catalog_Clarification_Guid` ON `catalog_clarification_request` (`guid`);--> statement-breakpoint
CREATE INDEX `IDX_DB58F6476BF700BD` ON `catalog_contract` (`status_id`);--> statement-breakpoint
CREATE INDEX `Contract_Procedure_Registration_Number` ON `catalog_contract` (`procedure_registration_number`);--> statement-breakpoint
CREATE INDEX `Contract_Registration_Number` ON `catalog_contract` (`registration_number`);--> statement-breakpoint
CREATE INDEX `Contract_GUID` ON `catalog_contract` (`guid`);--> statement-breakpoint
CREATE INDEX `Contract_Lot_GUID` ON `catalog_contract` (`lot_guid`);--> statement-breakpoint
CREATE INDEX `Contract_Lot_ID` ON `catalog_contract` (`lot_id`);--> statement-breakpoint
CREATE INDEX `Contract_Procedure_GUID` ON `catalog_contract` (`procedure_guid`);--> statement-breakpoint
CREATE INDEX `Contract_Procedure_ID` ON `catalog_contract` (`procedure_id`);--> statement-breakpoint
CREATE INDEX `Contract_Customer_GUID` ON `catalog_contract` (`customer_guid`);--> statement-breakpoint
CREATE INDEX `Contract_Customer_ID` ON `catalog_contract` (`customer_id`);--> statement-breakpoint
CREATE INDEX `Contract_Supplier_GUID` ON `catalog_contract` (`supplier_guid`);--> statement-breakpoint
CREATE INDEX `Contract_Supplier_ID` ON `catalog_contract` (`supplier_id`);--> statement-breakpoint
CREATE INDEX `Contract_Currency_ID` ON `catalog_contract` (`currency_Id`);--> statement-breakpoint
CREATE INDEX `Contract_Customer_INN` ON `catalog_contract` (`customer_inn`);--> statement-breakpoint
CREATE INDEX `Contract_Customer_KPP` ON `catalog_contract` (`customer_kpp`);--> statement-breakpoint
CREATE INDEX `Contract_Customer_ORGN` ON `catalog_contract` (`customer_ogrn`);--> statement-breakpoint
CREATE INDEX `Contract_Customer_Role` ON `catalog_contract` (`customer_role`);--> statement-breakpoint
CREATE INDEX `Contract_Supplier_INN` ON `catalog_contract` (`supplier_inn`);--> statement-breakpoint
CREATE INDEX `Contract_Supplier_KPP` ON `catalog_contract` (`supplier_kpp`);--> statement-breakpoint
CREATE INDEX `Contract_Supplier_OGRN` ON `catalog_contract` (`supplier_ogrn`);--> statement-breakpoint
CREATE INDEX `Contract_Supplier_Role` ON `catalog_contract` (`supplier_role`);--> statement-breakpoint
CREATE INDEX `IDX_5AE60702576E0FD` ON `catalog_contract_action` (`contract_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Contract_Action_Code` ON `catalog_contract_action` (`code`);--> statement-breakpoint
CREATE INDEX `IDX_D574E23C2576E0FD` ON `catalog_contract_agreement` (`contract_id`);--> statement-breakpoint
CREATE INDEX `IDX_D574E23C6BF700BD` ON `catalog_contract_agreement` (`status_id`);--> statement-breakpoint
CREATE INDEX `IDX_FF25754224890B2B` ON `catalog_contract_agreement_event` (`agreement_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Contract_Event_GUID` ON `catalog_contract_agreement_event` (`guid`);--> statement-breakpoint
CREATE INDEX `Catalog_Contract_Agreement_Status_Code` ON `catalog_contract_agreement_status` (`code`);--> statement-breakpoint
CREATE INDEX `IDX_EBDA848E2576E0FD` ON `catalog_contract_event` (`contract_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Contract_Event_GUID` ON `catalog_contract_event` (`guid`);--> statement-breakpoint
CREATE INDEX `Catalog_Contract_Status_Code` ON `catalog_contract_status` (`code`);--> statement-breakpoint
CREATE INDEX `IDX_1C6530357D8C8404` ON `catalog_organization_parameter` (`organization_id`);--> statement-breakpoint
CREATE INDEX `IDX_2C1444447D8C8411` ON `catalog_organization_parameter` (`user_id`);--> statement-breakpoint
CREATE INDEX `IDX_3C1530357D8C8404` ON `catalog_organization_parameter` (`organization_guid`);--> statement-breakpoint
CREATE INDEX `IDX_4C0110257D8C8411` ON `catalog_organization_parameter` (`user_guid`);--> statement-breakpoint
CREATE INDEX `IDX_660156A26BF700BD` ON `catalog_procedure` (`status_id`);--> statement-breakpoint
CREATE INDEX `IDX_660156A2C54C8C93` ON `catalog_procedure` (`type_id`);--> statement-breakpoint
CREATE INDEX `IDX_660156A2727ACA70` ON `catalog_procedure` (`parent_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_RegistrationNumber` ON `catalog_procedure` (`registration_number`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Placer` ON `catalog_procedure` (`placer_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Placer_Inn` ON `catalog_procedure` (`placer_inn`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Placer_Kpp` ON `catalog_procedure` (`placer_kpp`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Placer_Ogrn` ON `catalog_procedure` (`placer_ogrn`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Placer_Role` ON `catalog_procedure` (`placer_role`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Placer_Guid` ON `catalog_procedure` (`placer_guid`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Guid` ON `catalog_procedure` (`guid`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Specialized_Organization` ON `catalog_procedure` (`specialized_organization_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Specialized_Organization_Inn` ON `catalog_procedure` (`specialized_organization_inn`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Specialized_Organization_Kpp` ON `catalog_procedure` (`specialized_organization_kpp`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Specialized_Organization_Ogrn` ON `catalog_procedure` (`specialized_organization_ogrn`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Specialized_Organization_Guid` ON `catalog_procedure` (`specialized_organization_guid`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Specialized_Organization_Role` ON `catalog_procedure` (`specialized_organization_role`);--> statement-breakpoint
CREATE INDEX `IDX_660156A27BF3C49B` ON `catalog_procedure` (`plan_type_id`);--> statement-breakpoint
CREATE INDEX `IDX_PROCEDURE_REGISTRATION_NUMBER` ON `catalog_procedure_complaint` (`procedure_registration_number`);--> statement-breakpoint
CREATE INDEX `IDX_A717F055A8CBA5F7` ON `catalog_procedure_favourite` (`lot_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Favourite_member` ON `catalog_procedure_favourite` (`member_id`);--> statement-breakpoint
CREATE INDEX `IDX_1EDCF92FC54C8C93` ON `catalog_procedure_feature` (`type_id`);--> statement-breakpoint
CREATE INDEX `IDX_1EDCF92F1624BCD2` ON `catalog_procedure_feature` (`procedure_id`);--> statement-breakpoint
CREATE INDEX `IDX_1EDCF92FA8CBA5F7` ON `catalog_procedure_feature` (`lot_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Feature_TypeCode` ON `catalog_procedure_feature_type` (`code`);--> statement-breakpoint
CREATE INDEX `IDX_D2DC46C7C54C8C93` ON `catalog_procedure_integration_packet` (`type_id`);--> statement-breakpoint
CREATE INDEX `IDX_D2DC46C76BF700BD` ON `catalog_procedure_integration_packet` (`status_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Integration_Packet_ObjectID` ON `catalog_procedure_integration_packet` (`object_id`);--> statement-breakpoint
CREATE INDEX `IDX_747346416BF700BD` ON `catalog_procedure_lot` (`status_id`);--> statement-breakpoint
CREATE INDEX `IDX_747346411624BCD2` ON `catalog_procedure_lot` (`procedure_id`);--> statement-breakpoint
CREATE INDEX `IDX_74734641727ACA70` ON `catalog_procedure_lot` (`parent_id`);--> statement-breakpoint
CREATE INDEX `IDX_127344415BF550BD` ON `catalog_procedure_lot` (`guid`);--> statement-breakpoint
CREATE INDEX `IDX_DFAD5179A8CBA5F7` ON `catalog_procedure_lot_action` (`lot_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Action_Code` ON `catalog_procedure_lot_action` (`code`);--> statement-breakpoint
CREATE INDEX `IDX_C4D19226A8CBA5F7` ON `catalog_procedure_lot_customer` (`lot_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Customer_Organization` ON `catalog_procedure_lot_customer` (`organization_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Customer_Region` ON `catalog_procedure_lot_customer` (`delivery_region_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Customer_Inn` ON `catalog_procedure_lot_customer` (`organization_inn`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Customer_Kpp` ON `catalog_procedure_lot_customer` (`organization_kpp`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Customer_Ogrn` ON `catalog_procedure_lot_customer` (`organization_ogrn`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Customer_Guid` ON `catalog_procedure_lot_customer` (`organization_guid`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Customer_Role` ON `catalog_procedure_lot_customer` (`organization_role`);--> statement-breakpoint
CREATE INDEX `IDX_88535DE5A8CBA5F7` ON `catalog_procedure_lot_event` (`lot_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Event_Guid` ON `catalog_procedure_lot_event` (`guid`);--> statement-breakpoint
CREATE INDEX `IDX_843649E6A8CBA5F7` ON `catalog_procedure_lot_item` (`lot_id`);--> statement-breakpoint
CREATE INDEX `IDX_843649E6C6E1754F` ON `catalog_procedure_lot_item` (`lot_customer_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Item_okpd2` ON `catalog_procedure_lot_item` (`okpd2_id`);--> statement-breakpoint
CREATE INDEX `IDX_843649E6C54C8C93` ON `catalog_procedure_lot_item` (`type_id`);--> statement-breakpoint
CREATE INDEX `IDX_DE8758C8A8CBA5F7` ON `catalog_procedure_lot_observer` (`lot_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Observer_Organization` ON `catalog_procedure_lot_observer` (`organization_id`);--> statement-breakpoint
CREATE INDEX `IDX_50D5F0DAA8CBA5F7` ON `catalog_procedure_lot_responsible_officer` (`lot_id`);--> statement-breakpoint
CREATE INDEX `idx_organization_id` ON `catalog_procedure_lot_responsible_officer` (`organization_id`);--> statement-breakpoint
CREATE INDEX `IDX_50D5F0DA3EDC7F21` ON `catalog_procedure_lot_responsible_officer` (`responsible_officer_id`);--> statement-breakpoint
CREATE INDEX `IDX_3A9C03D66BF700BD` ON `catalog_procedure_request` (`status_id`);--> statement-breakpoint
CREATE INDEX `IDX_3A9C03D64FDA6E0` ON `catalog_procedure_request` (`additional_status_id`);--> statement-breakpoint
CREATE INDEX `IDX_3A9C03D6A8CBA5F7` ON `catalog_procedure_request` (`lot_id`);--> statement-breakpoint
CREATE INDEX `IDX_3A9C03D6727ACA70` ON `catalog_procedure_request` (`parent_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Request_Organization` ON `catalog_procedure_request` (`organization_id`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Request_Organization_Inn` ON `catalog_procedure_request` (`organization_inn`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Request_Organization_Kpp` ON `catalog_procedure_request` (`organization_kpp`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Request_Organization_Ogrn` ON `catalog_procedure_request` (`organization_ogrn`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Request_Organization_Role` ON `catalog_procedure_request` (`organization_role`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Request_Organization_Guid` ON `catalog_procedure_request` (`organization_guid`);--> statement-breakpoint
CREATE INDEX `Catalog_Lot_Request_Guid` ON `catalog_procedure_request` (`guid`);--> statement-breakpoint
CREATE INDEX `idx_member` ON `catalog_procedure_responsible_officer` (`member_id`);--> statement-breakpoint
CREATE INDEX `idx_email` ON `catalog_procedure_responsible_officer` (`email`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_StatusCode` ON `catalog_procedure_status` (`code`);--> statement-breakpoint
CREATE INDEX `Catalog_Procedure_Type_Code` ON `catalog_procedure_type` (`code`);--> statement-breakpoint
CREATE INDEX `IDX_4E24CD91C54C8C93` ON `integration_catalog_packet` (`type_id`);--> statement-breakpoint
CREATE INDEX `IDX_4E24CD916BF700BD` ON `integration_catalog_packet` (`status_id`);--> statement-breakpoint
CREATE INDEX `Integration_Catalog_Packet_ObjectID` ON `integration_catalog_packet` (`object_id`);--> statement-breakpoint
CREATE INDEX `IDX_83326F291624BCD2` ON `organization_procedure_regulated_datetime` (`procedure_id`);--> statement-breakpoint
ALTER TABLE `catalog_clarification_action` ADD CONSTRAINT `FK_19BCBFB1427EB8A5` FOREIGN KEY (`request_id`) REFERENCES `catalog_clarification_request`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_clarification_event` ADD CONSTRAINT `FK_956427DF427EB8A5` FOREIGN KEY (`request_id`) REFERENCES `catalog_clarification_request`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_clarification_interaction` ADD CONSTRAINT `FK_23BBE7B6427EB8A5` FOREIGN KEY (`request_id`) REFERENCES `catalog_clarification_request`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_clarification_request` ADD CONSTRAINT `FK_99AE8EDE6BF700BD` FOREIGN KEY (`status_id`) REFERENCES `catalog_clarification_status`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_clarification_request` ADD CONSTRAINT `FK_99AE8EDEC54C8C93` FOREIGN KEY (`type_id`) REFERENCES `catalog_clarification_type`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_contract` ADD CONSTRAINT `FK_DB58F6476BF700BD` FOREIGN KEY (`status_id`) REFERENCES `catalog_contract_status`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_contract_action` ADD CONSTRAINT `FK_5AE60702576E0FD` FOREIGN KEY (`contract_id`) REFERENCES `catalog_contract`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_contract_agreement` ADD CONSTRAINT `FK_D574E23C2576E0FD` FOREIGN KEY (`contract_id`) REFERENCES `catalog_contract`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_contract_agreement` ADD CONSTRAINT `FK_D574E23C6BF700BD` FOREIGN KEY (`status_id`) REFERENCES `catalog_contract_agreement_status`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_contract_agreement_event` ADD CONSTRAINT `FK_FF25754224890B2B` FOREIGN KEY (`agreement_id`) REFERENCES `catalog_contract_agreement`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_contract_event` ADD CONSTRAINT `FK_EBDA848E2576E0FD` FOREIGN KEY (`contract_id`) REFERENCES `catalog_contract`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure` ADD CONSTRAINT `FK_660156A27BF3C49B` FOREIGN KEY (`plan_type_id`) REFERENCES `catalog_procedure_type`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure` ADD CONSTRAINT `FK_660156A26BF700BD` FOREIGN KEY (`status_id`) REFERENCES `catalog_procedure_status`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure` ADD CONSTRAINT `FK_660156A2727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `catalog_procedure`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure` ADD CONSTRAINT `FK_660156A2C54C8C93` FOREIGN KEY (`type_id`) REFERENCES `catalog_procedure_type`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_favourite` ADD CONSTRAINT `FK_A717F055A8CBA5F7` FOREIGN KEY (`lot_id`) REFERENCES `catalog_procedure_lot`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_feature` ADD CONSTRAINT `FK_1EDCF92F1624BCD2` FOREIGN KEY (`procedure_id`) REFERENCES `catalog_procedure`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_feature` ADD CONSTRAINT `FK_1EDCF92FA8CBA5F7` FOREIGN KEY (`lot_id`) REFERENCES `catalog_procedure_lot`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_feature` ADD CONSTRAINT `FK_1EDCF92FC54C8C93` FOREIGN KEY (`type_id`) REFERENCES `catalog_procedure_feature_type`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_integration_packet` ADD CONSTRAINT `FK_D2DC46C76BF700BD` FOREIGN KEY (`status_id`) REFERENCES `catalog_procedure_integration_packet_status`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_integration_packet` ADD CONSTRAINT `FK_D2DC46C7C54C8C93` FOREIGN KEY (`type_id`) REFERENCES `catalog_procedure_integration_packet_type`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot` ADD CONSTRAINT `FK_747346411624BCD2` FOREIGN KEY (`procedure_id`) REFERENCES `catalog_procedure`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot` ADD CONSTRAINT `FK_747346416BF700BD` FOREIGN KEY (`status_id`) REFERENCES `catalog_procedure_status`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot` ADD CONSTRAINT `FK_74734641727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `catalog_procedure_lot`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot_action` ADD CONSTRAINT `FK_DFAD5179A8CBA5F7` FOREIGN KEY (`lot_id`) REFERENCES `catalog_procedure_lot`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot_customer` ADD CONSTRAINT `FK_C4D19226A8CBA5F7` FOREIGN KEY (`lot_id`) REFERENCES `catalog_procedure_lot`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot_event` ADD CONSTRAINT `FK_88535DE5A8CBA5F7` FOREIGN KEY (`lot_id`) REFERENCES `catalog_procedure_lot`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot_item` ADD CONSTRAINT `FK_843649E6A8CBA5F7` FOREIGN KEY (`lot_id`) REFERENCES `catalog_procedure_lot`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot_item` ADD CONSTRAINT `FK_843649E6C54C8C93` FOREIGN KEY (`type_id`) REFERENCES `catalog_procedure_lot_item_type`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot_item` ADD CONSTRAINT `FK_843649E6C6E1754F` FOREIGN KEY (`lot_customer_id`) REFERENCES `catalog_procedure_lot_customer`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot_observer` ADD CONSTRAINT `FK_DE8758C8A8CBA5F7` FOREIGN KEY (`lot_id`) REFERENCES `catalog_procedure_lot`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot_responsible_officer` ADD CONSTRAINT `FK_50D5F0DA3EDC7F21` FOREIGN KEY (`responsible_officer_id`) REFERENCES `catalog_procedure_responsible_officer`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_lot_responsible_officer` ADD CONSTRAINT `FK_50D5F0DAA8CBA5F7` FOREIGN KEY (`lot_id`) REFERENCES `catalog_procedure_lot`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_request` ADD CONSTRAINT `FK_3A9C03D64FDA6E0` FOREIGN KEY (`additional_status_id`) REFERENCES `catalog_procedure_status`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_request` ADD CONSTRAINT `FK_3A9C03D66BF700BD` FOREIGN KEY (`status_id`) REFERENCES `catalog_procedure_status`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_request` ADD CONSTRAINT `FK_3A9C03D6727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `catalog_procedure_request`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `catalog_procedure_request` ADD CONSTRAINT `FK_3A9C03D6A8CBA5F7` FOREIGN KEY (`lot_id`) REFERENCES `catalog_procedure_lot`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `integration_catalog_packet` ADD CONSTRAINT `FK_4E24CD916BF700BD` FOREIGN KEY (`status_id`) REFERENCES `integration_catalog_packet_status`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `integration_catalog_packet` ADD CONSTRAINT `FK_4E24CD91C54C8C93` FOREIGN KEY (`type_id`) REFERENCES `integration_catalog_packet_type`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `organization_procedure_regulated_datetime` ADD CONSTRAINT `FK_83326F291624BCD2` FOREIGN KEY (`procedure_id`) REFERENCES `catalog_procedure`(`id`) ON DELETE restrict ON UPDATE restrict;
*/