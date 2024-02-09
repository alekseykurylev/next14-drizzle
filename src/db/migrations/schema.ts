import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, foreignKey, int, varchar, longtext, datetime, timestamp, tinyint, unique, decimal, double, date } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const catalogClarificationAction = mysqlTable("catalog_clarification_action", {
	id: int("id").autoincrement().notNull(),
	requestId: int("request_id").references(() => catalogClarificationRequest.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	url: varchar("url", { length: 255 }).notNull(),
	priority: int("priority"),
	allowRole: longtext("allow_role"),
	allowRoleExcept: longtext("allow_role_except"),
	allowPermission: longtext("allow_permission"),
	allowPermissionExcept: longtext("allow_permission_except"),
	allowClarificationStatus: longtext("allow_clarification_status"),
	allowClarificationStatusExcept: longtext("allow_clarification_status_except"),
	allowOrganization: longtext("allow_organization"),
	style: varchar("style", { length: 255 }),
	openedAt: datetime("opened_at", { mode: 'string'}),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	type: varchar("type", { length: 255 }).notNull(),
},
(table) => {
	return {
		idx19Bcbfb1427Eb8A5: index("IDX_19BCBFB1427EB8A5").on(table.requestId),
		catalogClarificationActionCode: index("Catalog_Clarification_ActionCode").on(table.code),
	}
});

export const catalogClarificationEvent = mysqlTable("catalog_clarification_event", {
	id: int("id").autoincrement().notNull(),
	requestId: int("request_id").references(() => catalogClarificationRequest.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	publicationDatetime: datetime("publication_datetime", { mode: 'string'}),
	name: longtext("name"),
	url: longtext("url"),
	canceled: tinyint("canceled"),
	allowRole: longtext("allow_role"),
	allowOrganization: longtext("allow_organization"),
	guid: varchar("guid", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	type: varchar("type", { length: 255 }).notNull(),
	eventType: varchar("event_type", { length: 255 }),
},
(table) => {
	return {
		idx956427Df427Eb8A5: index("IDX_956427DF427EB8A5").on(table.requestId),
		catalogClarificationEventGuid: index("Catalog_Clarification_EventGuid").on(table.guid),
	}
});

export const catalogClarificationInteraction = mysqlTable("catalog_clarification_interaction", {
	id: int("id").autoincrement().notNull(),
	requestId: int("request_id").references(() => catalogClarificationRequest.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	memberId: int("member_id"),
	organizationId: int("organization_id"),
	isRead: tinyint("is_read"),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	type: varchar("type", { length: 255 }).notNull(),
},
(table) => {
	return {
		idx23Bbe7B6427Eb8A5: index("IDX_23BBE7B6427EB8A5").on(table.requestId),
		clarificationOrganizationActionMember: index("Clarification_Organization_Action_Member").on(table.memberId),
		clarificationOrganizationActionOrganization: index("Clarification_Organization_Action_Organization").on(table.organizationId),
	}
});

export const catalogClarificationRequest = mysqlTable("catalog_clarification_request", {
	id: int("id").autoincrement().notNull(),
	statusId: int("status_id").notNull().references(() => catalogClarificationStatus.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	typeId: int("type_id").notNull().references(() => catalogClarificationType.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	lotGuid: varchar("lot_guid", { length: 255 }).notNull(),
	lotId: int("lot_id").notNull(),
	lotSubject: longtext("lot_subject"),
	lotOrdinalNumber: int("lot_ordinal_number").notNull(),
	lotUrlVsrz: varchar("lot_url_vsrz", { length: 255 }).notNull(),
	procedureGuid: varchar("procedure_guid", { length: 255 }).notNull(),
	procedureId: int("procedure_id").notNull(),
	procedureName: longtext("procedure_name").notNull(),
	procedureType: varchar("procedure_type", { length: 255 }).notNull(),
	procedureUrlVsrz: varchar("procedure_url_vsrz", { length: 255 }).notNull(),
	procedureRegistrationNumber: varchar("procedure_registration_number", { length: 255 }).notNull(),
	organizationGuid: varchar("organization_guid", { length: 255 }).notNull(),
	organizationId: int("organization_id").notNull(),
	organizationFullName: longtext("organization_full_name").notNull(),
	organizationShortName: longtext("organization_short_name"),
	organizationInn: varchar("organization_inn", { length: 255 }).notNull(),
	organizationKpp: varchar("organization_kpp", { length: 255 }),
	organizationOgrn: varchar("organization_ogrn", { length: 255 }),
	organizationRole: varchar("organization_role", { length: 255 }).notNull(),
	subject: longtext("subject"),
	number: varchar("number", { length: 255 }),
	publicationDatetime: datetime("publication_datetime", { mode: 'string'}),
	regulatedDatetime: datetime("regulated_datetime", { mode: 'string'}),
	archive: tinyint("archive").default(0),
	guid: varchar("guid", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	type: varchar("type", { length: 255 }).notNull(),
	url: varchar("url", { length: 255 }),
},
(table) => {
	return {
		idx99Ae8Ede6Bf700Bd: index("IDX_99AE8EDE6BF700BD").on(table.statusId),
		idx99Ae8Edec54C8C93: index("IDX_99AE8EDEC54C8C93").on(table.typeId),
		catalogClarificationNumber: index("Catalog_Clarification_Number").on(table.number),
		catalogClarificationOrganizationGuid: index("Catalog_Clarification_OrganizationGuid").on(table.organizationGuid),
		catalogClarificationOrganizationId: index("Catalog_Clarification_OrganizationId").on(table.organizationId),
		catalogClarificationOrganizationInn: index("Catalog_Clarification_OrganizationInn").on(table.organizationInn),
		catalogClarificationOrganizationKpp: index("Catalog_Clarification_OrganizationKpp").on(table.organizationKpp),
		catalogClarificationOrganizationOgrn: index("Catalog_Clarification_OrganizationOgrn").on(table.organizationOgrn),
		catalogClarificationLotGuid: index("Catalog_Clarification_LotGuid").on(table.lotGuid),
		catalogClarificationLotId: index("Catalog_Clarification_LotId").on(table.lotId),
		catalogClarificationProcedureGuid: index("Catalog_Clarification_ProcedureGuid").on(table.procedureGuid),
		catalogClarificationProcedureId: index("Catalog_Clarification_ProcedureId").on(table.procedureId),
		catalogClarificationProcedureType: index("Catalog_Clarification_ProcedureType").on(table.procedureType),
		catalogClarificationProcedureRegistrationNumber: index("Catalog_Clarification_ProcedureRegistrationNumber").on(table.procedureRegistrationNumber),
		catalogClarificationGuid: index("Catalog_Clarification_Guid").on(table.guid),
	}
});

export const catalogClarificationStatus = mysqlTable("catalog_clarification_status", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }),
},
(table) => {
	return {
		uniq2570563F77153098: unique("UNIQ_2570563F77153098").on(table.code),
	}
});

export const catalogClarificationType = mysqlTable("catalog_clarification_type", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }),
},
(table) => {
	return {
		uniq979965C177153098: unique("UNIQ_979965C177153098").on(table.code),
	}
});

export const catalogContract = mysqlTable("catalog_contract", {
	id: int("id").autoincrement().notNull(),
	statusId: int("status_id").notNull().references(() => catalogContractStatus.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	registrationNumber: varchar("registration_number", { length: 255 }),
	ordinalNumber: int("ordinal_number").notNull(),
	lotGuid: varchar("lot_guid", { length: 255 }).notNull(),
	lotId: int("lot_id").notNull(),
	lotSubject: longtext("lot_subject").notNull(),
	lotOrdinalNumber: int("lot_ordinal_number").notNull(),
	lotUrlVsrz: varchar("lot_url_vsrz", { length: 255 }).notNull(),
	procedureGuid: varchar("procedure_guid", { length: 255 }).notNull(),
	procedureId: int("procedure_id").notNull(),
	procedureName: longtext("procedure_name").notNull(),
	procedureUrlVsrz: varchar("procedure_url_vsrz", { length: 255 }).notNull(),
	procedureRegistrationNumber: varchar("procedure_registration_number", { length: 255 }).notNull(),
	procedureType: varchar("procedure_type", { length: 255 }),
	customerGuid: varchar("customer_guid", { length: 255 }).notNull(),
	customerId: int("customer_id").notNull(),
	customerFullName: longtext("customer_full_name").notNull(),
	customerShortName: longtext("customer_short_name"),
	customerInn: varchar("customer_inn", { length: 255 }).notNull(),
	customerKpp: varchar("customer_kpp", { length: 255 }).notNull(),
	customerOgrn: varchar("customer_ogrn", { length: 255 }).notNull(),
	customerRole: varchar("customer_role", { length: 255 }).notNull(),
	supplierGuid: varchar("supplier_guid", { length: 255 }).notNull(),
	supplierId: int("supplier_id").notNull(),
	supplierFullName: longtext("supplier_full_name").notNull(),
	supplierShortName: longtext("supplier_short_name"),
	supplierInn: varchar("supplier_inn", { length: 255 }).notNull(),
	supplierKpp: varchar("supplier_kpp", { length: 255 }),
	supplierOgrn: varchar("supplier_ogrn", { length: 255 }),
	supplierRole: varchar("supplier_role", { length: 255 }).notNull(),
	price: decimal("price", { precision: 31, scale: 11 }),
	agreementPrice: decimal("agreement_price", { precision: 20, scale: 2 }),
	priceWithoutPreference: decimal("price_without_preference", { precision: 20, scale: 2 }),
	currencyId: int("currency_Id").notNull(),
	executionRequirement: tinyint("execution_requirement").notNull(),
	usePreference: tinyint("use_preference").notNull(),
	active: tinyint("active").notNull(),
	version: int("version").notNull(),
	regulatedDatetime: datetime("regulated_datetime", { mode: 'string'}),
	formationSignDatetime: datetime("formation_sign_datetime", { mode: 'string'}),
	supplierSignDatetime: datetime("supplier_sign_datetime", { mode: 'string'}),
	customerSignDatetime: datetime("customer_sign_datetime", { mode: 'string'}),
	guid: varchar("guid", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	type: varchar("type", { length: 255 }).notNull(),
	startPrice: double("start_price"),
	concludeContractRight: tinyint("conclude_contract_right").default(0),
	maxPriceDecrease: decimal("max_price_decrease", { precision: 30, scale: 11 }),
	saving: decimal("saving", { precision: 22, scale: 2 }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	calculatedDeviationDate: date("calculated_deviation_date", { mode: 'string' }),
},
(table) => {
	return {
		idxDb58F6476Bf700Bd: index("IDX_DB58F6476BF700BD").on(table.statusId),
		contractProcedureRegistrationNumber: index("Contract_Procedure_Registration_Number").on(table.procedureRegistrationNumber),
		contractRegistrationNumber: index("Contract_Registration_Number").on(table.registrationNumber),
		contractGuid: index("Contract_GUID").on(table.guid),
		contractLotGuid: index("Contract_Lot_GUID").on(table.lotGuid),
		contractLotId: index("Contract_Lot_ID").on(table.lotId),
		contractProcedureGuid: index("Contract_Procedure_GUID").on(table.procedureGuid),
		contractProcedureId: index("Contract_Procedure_ID").on(table.procedureId),
		contractCustomerGuid: index("Contract_Customer_GUID").on(table.customerGuid),
		contractCustomerId: index("Contract_Customer_ID").on(table.customerId),
		contractSupplierGuid: index("Contract_Supplier_GUID").on(table.supplierGuid),
		contractSupplierId: index("Contract_Supplier_ID").on(table.supplierId),
		contractCurrencyId: index("Contract_Currency_ID").on(table.currencyId),
		contractCustomerInn: index("Contract_Customer_INN").on(table.customerInn),
		contractCustomerKpp: index("Contract_Customer_KPP").on(table.customerKpp),
		contractCustomerOrgn: index("Contract_Customer_ORGN").on(table.customerOgrn),
		contractCustomerRole: index("Contract_Customer_Role").on(table.customerRole),
		contractSupplierInn: index("Contract_Supplier_INN").on(table.supplierInn),
		contractSupplierKpp: index("Contract_Supplier_KPP").on(table.supplierKpp),
		contractSupplierOgrn: index("Contract_Supplier_OGRN").on(table.supplierOgrn),
		contractSupplierRole: index("Contract_Supplier_Role").on(table.supplierRole),
	}
});

export const catalogContractAction = mysqlTable("catalog_contract_action", {
	id: int("id").autoincrement().notNull(),
	contractId: int("contract_id").notNull().references(() => catalogContract.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	url: varchar("url", { length: 255 }).notNull(),
	priority: int("priority"),
	allowRole: longtext("allow_role"),
	allowRoleExcept: longtext("allow_role_except"),
	allowPermission: longtext("allow_permission"),
	allowPermissionExcept: longtext("allow_permission_except"),
	allowContractStatus: longtext("allow_contract_status"),
	allowContractStatusExcept: longtext("allow_contract_status_except"),
	allowOrganization: longtext("allow_organization"),
	style: varchar("style", { length: 255 }),
	openedAt: datetime("opened_at", { mode: 'string'}),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
},
(table) => {
	return {
		idx5Ae60702576E0Fd: index("IDX_5AE60702576E0FD").on(table.contractId),
		catalogContractActionCode: index("Catalog_Contract_Action_Code").on(table.code),
	}
});

export const catalogContractAgreement = mysqlTable("catalog_contract_agreement", {
	id: int("id").autoincrement().notNull(),
	contractId: int("contract_id").notNull().references(() => catalogContract.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	statusId: int("status_id").notNull().references(() => catalogContractAgreementStatus.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	guid: varchar("guid", { length: 255 }).notNull(),
	version: int("version").notNull(),
	number: varchar("number", { length: 255 }),
	price: decimal("price", { precision: 20, scale: 2 }).notNull(),
	outsideEtp: tinyint("outside_etp").notNull(),
	isFinish: tinyint("is_finish").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
},
(table) => {
	return {
		idxD574E23C2576E0Fd: index("IDX_D574E23C2576E0FD").on(table.contractId),
		idxD574E23C6Bf700Bd: index("IDX_D574E23C6BF700BD").on(table.statusId),
	}
});

export const catalogContractAgreementEvent = mysqlTable("catalog_contract_agreement_event", {
	id: int("id").autoincrement().notNull(),
	agreementId: int("agreement_id").references(() => catalogContractAgreement.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	publicationDatetime: datetime("publication_datetime", { mode: 'string'}),
	name: longtext("name"),
	url: longtext("url"),
	allowRole: longtext("allow_role"),
	allowOrganization: longtext("allow_organization"),
	guid: varchar("guid", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
},
(table) => {
	return {
		idxFf25754224890B2B: index("IDX_FF25754224890B2B").on(table.agreementId),
		catalogContractEventGuid: index("Catalog_Contract_Event_GUID").on(table.guid),
	}
});

export const catalogContractAgreementStatus = mysqlTable("catalog_contract_agreement_status", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }),
},
(table) => {
	return {
		catalogContractAgreementStatusCode: index("Catalog_Contract_Agreement_Status_Code").on(table.code),
	}
});

export const catalogContractEvent = mysqlTable("catalog_contract_event", {
	id: int("id").autoincrement().notNull(),
	contractId: int("contract_id").references(() => catalogContract.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	publicationDatetime: datetime("publication_datetime", { mode: 'string'}),
	name: longtext("name"),
	url: longtext("url"),
	canceled: tinyint("canceled"),
	allowRole: longtext("allow_role"),
	allowOrganization: longtext("allow_organization"),
	guid: varchar("guid", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	type: varchar("type", { length: 255 }),
},
(table) => {
	return {
		idxEbda848E2576E0Fd: index("IDX_EBDA848E2576E0FD").on(table.contractId),
		catalogContractEventGuid: index("Catalog_Contract_Event_GUID").on(table.guid),
	}
});

export const catalogContractStatus = mysqlTable("catalog_contract_status", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }),
},
(table) => {
	return {
		catalogContractStatusCode: index("Catalog_Contract_Status_Code").on(table.code),
	}
});

export const catalogOrganizationParameter = mysqlTable("catalog_organization_parameter", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	value: longtext("value").notNull(),
	organizationId: int("organization_id").notNull(),
	organizationGuid: varchar("organization_guid", { length: 36 }).notNull(),
	userId: int("user_id"),
	userGuid: varchar("user_guid", { length: 36 }),
	createdAt: datetime("created_at", { mode: 'string'}).notNull(),
	updatedAt: datetime("updated_at", { mode: 'string'}),
},
(table) => {
	return {
		idx1C6530357D8C8404: index("IDX_1C6530357D8C8404").on(table.organizationId),
		idx2C1444447D8C8411: index("IDX_2C1444447D8C8411").on(table.userId),
		idx3C1530357D8C8404: index("IDX_3C1530357D8C8404").on(table.organizationGuid),
		idx4C0110257D8C8411: index("IDX_4C0110257D8C8411").on(table.userGuid),
	}
});

export const catalogProcedure = mysqlTable("catalog_procedure", {
	id: int("id").autoincrement().notNull(),
	statusId: int("status_id").notNull().references(() => catalogProcedureStatus.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	typeId: int("type_id").notNull().references(() => catalogProcedureType.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	parentId: int("parent_id"),
	name: longtext("name"),
	registrationNumber: varchar("registration_number", { length: 255 }),
	version: int("version"),
	publicationDatetime: datetime("publication_datetime", { mode: 'string'}),
	modificationDatetime: datetime("modification_datetime", { mode: 'string'}),
	placerId: int("placer_id").notNull(),
	placerFullName: longtext("placer_full_name"),
	placerShortName: longtext("placer_short_name"),
	placerInn: varchar("placer_inn", { length: 255 }),
	placerKpp: varchar("placer_kpp", { length: 255 }),
	placerOgrn: varchar("placer_ogrn", { length: 255 }),
	placerGuid: varchar("placer_guid", { length: 255 }),
	placerRole: varchar("placer_role", { length: 255 }),
	placerRegionId: int("placer_region_id"),
	oosGuid: varchar("oos_guid", { length: 255 }),
	etpId: int("etp_id").notNull(),
	guid: varchar("guid", { length: 255 }).notNull(),
	urlOos: varchar("url_oos", { length: 255 }),
	urlVsrz: varchar("url_vsrz", { length: 255 }),
	isJointMarket: tinyint("is_joint_market"),
	isForSpareParts: tinyint("is_for_spare_parts"),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	type: varchar("type", { length: 255 }).notNull(),
	specializedOrganizationId: int("specialized_organization_id"),
	specializedOrganizationFullName: longtext("specialized_organization_full_name"),
	specializedOrganizationShortName: longtext("specialized_organization_short_name"),
	specializedOrganizationInn: varchar("specialized_organization_inn", { length: 255 }),
	specializedOrganizationKpp: varchar("specialized_organization_kpp", { length: 255 }),
	specializedOrganizationOgrn: varchar("specialized_organization_ogrn", { length: 255 }),
	specializedOrganizationGuid: varchar("specialized_organization_guid", { length: 255 }),
	specializedOrganizationRole: varchar("specialized_organization_role", { length: 255 }),
	specializedOrganizationRegionId: int("specialized_organization_region_id"),
	customersAccessControl: longtext("customers_access_control"),
	abandonedReason: varchar("abandoned_reason", { length: 50 }),
	notPublishedOnEis: tinyint("not_published_on_eis"),
	planTypeId: int("plan_type_id").references(() => catalogProcedureType.id, { onDelete: "restrict", onUpdate: "restrict" } ),
},
(table) => {
	return {
		idx660156A26Bf700Bd: index("IDX_660156A26BF700BD").on(table.statusId),
		idx660156A2C54C8C93: index("IDX_660156A2C54C8C93").on(table.typeId),
		idx660156A2727Aca70: index("IDX_660156A2727ACA70").on(table.parentId),
		catalogProcedureRegistrationNumber: index("Catalog_Procedure_RegistrationNumber").on(table.registrationNumber),
		catalogProcedurePlacer: index("Catalog_Procedure_Placer").on(table.placerId),
		catalogProcedurePlacerInn: index("Catalog_Procedure_Placer_Inn").on(table.placerInn),
		catalogProcedurePlacerKpp: index("Catalog_Procedure_Placer_Kpp").on(table.placerKpp),
		catalogProcedurePlacerOgrn: index("Catalog_Procedure_Placer_Ogrn").on(table.placerOgrn),
		catalogProcedurePlacerRole: index("Catalog_Procedure_Placer_Role").on(table.placerRole),
		catalogProcedurePlacerGuid: index("Catalog_Procedure_Placer_Guid").on(table.placerGuid),
		catalogProcedureGuid: index("Catalog_Procedure_Guid").on(table.guid),
		catalogProcedureSpecializedOrganization: index("Catalog_Procedure_Specialized_Organization").on(table.specializedOrganizationId),
		catalogProcedureSpecializedOrganizationInn: index("Catalog_Procedure_Specialized_Organization_Inn").on(table.specializedOrganizationInn),
		catalogProcedureSpecializedOrganizationKpp: index("Catalog_Procedure_Specialized_Organization_Kpp").on(table.specializedOrganizationKpp),
		catalogProcedureSpecializedOrganizationOgrn: index("Catalog_Procedure_Specialized_Organization_Ogrn").on(table.specializedOrganizationOgrn),
		catalogProcedureSpecializedOrganizationGuid: index("Catalog_Procedure_Specialized_Organization_Guid").on(table.specializedOrganizationGuid),
		catalogProcedureSpecializedOrganizationRole: index("Catalog_Procedure_Specialized_Organization_Role").on(table.specializedOrganizationRole),
		idx660156A27Bf3C49B: index("IDX_660156A27BF3C49B").on(table.planTypeId),
		fk660156A2727Aca70: foreignKey({
			columns: [table.parentId],
			foreignColumns: [table.id],
			name: "FK_660156A2727ACA70"
		}).onUpdate("restrict").onDelete("restrict"),
	}
});

export const catalogProcedureComplaint = mysqlTable("catalog_procedure_complaint", {
	id: int("id").autoincrement().notNull(),
	procedureRegistrationNumber: varchar("procedure_registration_number", { length: 100 }).notNull(),
	complaintType: varchar("complaint_type", { length: 50 }).notNull(),
	controllingOrganizationId: int("controlling_organization_id"),
	createdAt: datetime("created_at", { mode: 'string'}).notNull(),
},
(table) => {
	return {
		idxProcedureRegistrationNumber: index("IDX_PROCEDURE_REGISTRATION_NUMBER").on(table.procedureRegistrationNumber),
	}
});

export const catalogProcedureFavourite = mysqlTable("catalog_procedure_favourite", {
	id: int("id").autoincrement().notNull(),
	lotId: int("lot_id").references(() => catalogProcedureLot.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	memberId: int("member_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
},
(table) => {
	return {
		idxA717F055A8Cba5F7: index("IDX_A717F055A8CBA5F7").on(table.lotId),
		catalogLotFavouriteMember: index("Catalog_Lot_Favourite_member").on(table.memberId),
	}
});

export const catalogProcedureFeature = mysqlTable("catalog_procedure_feature", {
	id: int("id").autoincrement().notNull(),
	typeId: int("type_id").references(() => catalogProcedureFeatureType.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	procedureId: int("procedure_id").references(() => catalogProcedure.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	lotId: int("lot_id").references(() => catalogProcedureLot.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
},
(table) => {
	return {
		idx1Edcf92Fc54C8C93: index("IDX_1EDCF92FC54C8C93").on(table.typeId),
		idx1Edcf92F1624Bcd2: index("IDX_1EDCF92F1624BCD2").on(table.procedureId),
		idx1Edcf92Fa8Cba5F7: index("IDX_1EDCF92FA8CBA5F7").on(table.lotId),
	}
});

export const catalogProcedureFeatureType = mysqlTable("catalog_procedure_feature_type", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	title: longtext("title").notNull(),
	category: varchar("category", { length: 50 }),
},
(table) => {
	return {
		catalogFeatureTypeCode: index("Catalog_Feature_TypeCode").on(table.code),
	}
});

export const catalogProcedureIntegrationPacket = mysqlTable("catalog_procedure_integration_packet", {
	id: int("id").autoincrement().notNull(),
	typeId: int("type_id").references(() => catalogProcedureIntegrationPacketType.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	statusId: int("status_id").references(() => catalogProcedureIntegrationPacketStatus.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	guid: varchar("guid", { length: 255 }),
	objectId: varchar("object_id", { length: 255 }),
	realName: longtext("real_name"),
	title: longtext("title"),
	uri: longtext("uri"),
	hash: varchar("hash", { length: 100 }),
	description: longtext("description"),
	createAt: timestamp("create_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updateAt: timestamp("update_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
},
(table) => {
	return {
		idxD2Dc46C7C54C8C93: index("IDX_D2DC46C7C54C8C93").on(table.typeId),
		idxD2Dc46C76Bf700Bd: index("IDX_D2DC46C76BF700BD").on(table.statusId),
		catalogProcedureIntegrationPacketObjectId: index("Catalog_Procedure_Integration_Packet_ObjectID").on(table.objectId),
		uniqD2Dc46C72B6Fcfb2: unique("UNIQ_D2DC46C72B6FCFB2").on(table.guid),
	}
});

export const catalogProcedureIntegrationPacketStatus = mysqlTable("catalog_procedure_integration_packet_status", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
},
(table) => {
	return {
		uniq92D029A177153098: unique("UNIQ_92D029A177153098").on(table.code),
	}
});

export const catalogProcedureIntegrationPacketType = mysqlTable("catalog_procedure_integration_packet_type", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
},
(table) => {
	return {
		uniq32C7Fd177153098: unique("UNIQ_32C7FD177153098").on(table.code),
	}
});

export const catalogProcedureLot = mysqlTable("catalog_procedure_lot", {
	id: int("id").autoincrement().notNull(),
	statusId: int("status_id").notNull().references(() => catalogProcedureStatus.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	procedureId: int("procedure_id").references(() => catalogProcedure.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	parentId: int("parent_id"),
	version: int("version"),
	ordinalNumber: int("ordinal_number"),
	subject: longtext("subject"),
	requestStartGiveDatetime: datetime("request_start_give_datetime", { mode: 'string'}),
	requestEndGiveDatetime: datetime("request_end_give_datetime", { mode: 'string'}),
	requestReviewEndDatetime: datetime("request_review_end_datetime", { mode: 'string'}),
	tradeStartDatetime: datetime("trade_start_datetime", { mode: 'string'}),
	tradeEndDatetime: datetime("trade_end_datetime", { mode: 'string'}),
	regulatedDatetime: datetime("regulated_datetime", { mode: 'string'}),
	contractStartPrice: double("contract_start_price"),
	contractStartPriceCurrencyId: int("contract_start_price_currency_Id"),
	isJointMarket: tinyint("is_joint_market"),
	isForSpareParts: tinyint("is_for_spare_parts"),
	urlVsrz: varchar("url_vsrz", { length: 255 }),
	oosGuid: varchar("oos_guid", { length: 255 }),
	etpId: int("etp_id").notNull(),
	guid: varchar("guid", { length: 255 }).notNull(),
	additionalInformation: longtext("additional_information"),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	type: varchar("type", { length: 255 }).notNull(),
	isContractBlocked: tinyint("is_contract_blocked").default(0),
	contractFormationDatetime: datetime("contract_formation_datetime", { mode: 'string'}),
	ikz: longtext("ikz"),
	contractStartPriceSpareParts: double("contract_start_price_spare_parts"),
	isDrugs: tinyint("is_drugs"),
	hasRequestProvision: tinyint("has_request_provision"),
	hasContractProvision: tinyint("has_contract_provision"),
},
(table) => {
	return {
		idx747346416Bf700Bd: index("IDX_747346416BF700BD").on(table.statusId),
		idx747346411624Bcd2: index("IDX_747346411624BCD2").on(table.procedureId),
		idx74734641727Aca70: index("IDX_74734641727ACA70").on(table.parentId),
		idx127344415Bf550Bd: index("IDX_127344415BF550BD").on(table.guid),
		fk74734641727Aca70: foreignKey({
			columns: [table.parentId],
			foreignColumns: [table.id],
			name: "FK_74734641727ACA70"
		}).onUpdate("restrict").onDelete("restrict"),
	}
});

export const catalogProcedureLotAction = mysqlTable("catalog_procedure_lot_action", {
	id: int("id").autoincrement().notNull(),
	lotId: int("lot_id").notNull().references(() => catalogProcedureLot.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	url: varchar("url", { length: 255 }).notNull(),
	priority: int("priority"),
	allowRole: longtext("allow_role"),
	allowRoleExcept: longtext("allow_role_except"),
	allowPermission: longtext("allow_permission"),
	allowPermissionExcept: longtext("allow_permission_except"),
	allowLotStatus: longtext("allow_lot_status"),
	allowLotStatusExcept: longtext("allow_lot_status_except"),
	allowRequestStatus: longtext("allow_request_status"),
	allowRequestStatusExcept: longtext("allow_request_status_except"),
	allowOrganization: longtext("allow_organization"),
	style: varchar("style", { length: 255 }),
	openedAt: datetime("opened_at", { mode: 'string'}),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	secondaryName: varchar("secondary_name", { length: 255 }),
	secondaryPriority: int("secondary_priority"),
	isSecondaryHeadAction: tinyint("is_secondary_head_action"),
},
(table) => {
	return {
		idxDfad5179A8Cba5F7: index("IDX_DFAD5179A8CBA5F7").on(table.lotId),
		catalogActionCode: index("Catalog_Action_Code").on(table.code),
	}
});

export const catalogProcedureLotCustomer = mysqlTable("catalog_procedure_lot_customer", {
	id: int("id").autoincrement().notNull(),
	lotId: int("lot_id").notNull().references(() => catalogProcedureLot.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	organizationId: int("organization_id").notNull(),
	organizationFullName: longtext("organization_full_name"),
	organizationShortName: longtext("organization_short_name"),
	organizationInn: varchar("organization_inn", { length: 255 }),
	organizationKpp: varchar("organization_kpp", { length: 255 }),
	organizationOgrn: varchar("organization_ogrn", { length: 255 }),
	organizationGuid: varchar("organization_guid", { length: 255 }),
	organizationRole: varchar("organization_role", { length: 255 }),
	organizationRegionId: int("organization_region_id"),
	deliveryRegionId: int("delivery_region_id"),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	ikz: varchar("ikz", { length: 255 }),
},
(table) => {
	return {
		idxC4D19226A8Cba5F7: index("IDX_C4D19226A8CBA5F7").on(table.lotId),
		catalogLotCustomerOrganization: index("Catalog_Lot_Customer_Organization").on(table.organizationId),
		catalogLotCustomerRegion: index("Catalog_Lot_Customer_Region").on(table.deliveryRegionId),
		catalogLotCustomerInn: index("Catalog_Lot_Customer_Inn").on(table.organizationInn),
		catalogLotCustomerKpp: index("Catalog_Lot_Customer_Kpp").on(table.organizationKpp),
		catalogLotCustomerOgrn: index("Catalog_Lot_Customer_Ogrn").on(table.organizationOgrn),
		catalogLotCustomerGuid: index("Catalog_Lot_Customer_Guid").on(table.organizationGuid),
		catalogLotCustomerRole: index("Catalog_Lot_Customer_Role").on(table.organizationRole),
	}
});

export const catalogProcedureLotEvent = mysqlTable("catalog_procedure_lot_event", {
	id: int("id").autoincrement().notNull(),
	lotId: int("lot_id").references(() => catalogProcedureLot.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	publicationDatetime: datetime("publication_datetime", { mode: 'string'}),
	name: longtext("name"),
	url: longtext("url"),
	canceled: tinyint("canceled"),
	allowRole: longtext("allow_role"),
	allowOrganization: longtext("allow_organization"),
	guid: varchar("guid", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	style: varchar("style", { length: 255 }),
	eventType: varchar("event_type", { length: 255 }),
},
(table) => {
	return {
		idx88535De5A8Cba5F7: index("IDX_88535DE5A8CBA5F7").on(table.lotId),
		catalogLotEventGuid: index("Catalog_Lot_Event_Guid").on(table.guid),
	}
});

export const catalogProcedureLotItem = mysqlTable("catalog_procedure_lot_item", {
	id: int("id").autoincrement().notNull(),
	lotId: int("lot_id").notNull().references(() => catalogProcedureLot.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	lotCustomerId: int("lot_customer_id").references(() => catalogProcedureLotCustomer.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	ordinalNumber: int("ordinal_number"),
	okpd2Id: int("okpd2_id"),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	typeId: int("type_id").references(() => catalogProcedureLotItemType.id, { onDelete: "restrict", onUpdate: "restrict" } ),
},
(table) => {
	return {
		idx843649E6A8Cba5F7: index("IDX_843649E6A8CBA5F7").on(table.lotId),
		idx843649E6C6E1754F: index("IDX_843649E6C6E1754F").on(table.lotCustomerId),
		catalogLotItemOkpd2: index("Catalog_Lot_Item_okpd2").on(table.okpd2Id),
		idx843649E6C54C8C93: index("IDX_843649E6C54C8C93").on(table.typeId),
	}
});

export const catalogProcedureLotItemType = mysqlTable("catalog_procedure_lot_item_type", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 50 }).notNull(),
	name: varchar("name", { length: 100 }).notNull(),
	active: tinyint("active").notNull(),
});

export const catalogProcedureLotObserver = mysqlTable("catalog_procedure_lot_observer", {
	id: int("id").autoincrement().notNull(),
	lotId: int("lot_id").references(() => catalogProcedureLot.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	organizationId: int("organization_id").notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
},
(table) => {
	return {
		idxDe8758C8A8Cba5F7: index("IDX_DE8758C8A8CBA5F7").on(table.lotId),
		catalogProcedureObserverOrganization: index("Catalog_Procedure_Observer_Organization").on(table.organizationId),
	}
});

export const catalogProcedureLotResponsibleOfficer = mysqlTable("catalog_procedure_lot_responsible_officer", {
	id: int("id").autoincrement().notNull(),
	lotId: int("lot_id").notNull().references(() => catalogProcedureLot.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	organizationId: int("organization_id").notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	responsibleOfficerId: int("responsible_officer_id").references(() => catalogProcedureResponsibleOfficer.id, { onDelete: "restrict", onUpdate: "restrict" } ),
},
(table) => {
	return {
		idx50D5F0Daa8Cba5F7: index("IDX_50D5F0DAA8CBA5F7").on(table.lotId),
		idxOrganizationId: index("idx_organization_id").on(table.organizationId),
		idx50D5F0Da3Edc7F21: index("IDX_50D5F0DA3EDC7F21").on(table.responsibleOfficerId),
	}
});

export const catalogProcedureRequest = mysqlTable("catalog_procedure_request", {
	id: int("id").autoincrement().notNull(),
	statusId: int("status_id").notNull().references(() => catalogProcedureStatus.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	additionalStatusId: int("additional_status_id").references(() => catalogProcedureStatus.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	lotId: int("lot_id").references(() => catalogProcedureLot.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	parentId: int("parent_id"),
	sendDatetime: datetime("send_datetime", { mode: 'string'}),
	organizationId: int("organization_id").notNull(),
	organizationFullName: longtext("organization_full_name"),
	organizationShortName: longtext("organization_short_name"),
	organizationInn: varchar("organization_inn", { length: 255 }),
	organizationKpp: varchar("organization_kpp", { length: 255 }),
	organizationOgrn: varchar("organization_ogrn", { length: 255 }),
	organizationGuid: varchar("organization_guid", { length: 255 }),
	organizationRole: varchar("organization_role", { length: 255 }),
	organizationRegionId: int("organization_region_id"),
	guid: varchar("guid", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	specAccount: varchar("spec_account", { length: 20 }),
	applicationNumber: int("application_number"),
	countryGoods: longtext("country_goods"),
},
(table) => {
	return {
		idx3A9C03D66Bf700Bd: index("IDX_3A9C03D66BF700BD").on(table.statusId),
		idx3A9C03D64Fda6E0: index("IDX_3A9C03D64FDA6E0").on(table.additionalStatusId),
		idx3A9C03D6A8Cba5F7: index("IDX_3A9C03D6A8CBA5F7").on(table.lotId),
		idx3A9C03D6727Aca70: index("IDX_3A9C03D6727ACA70").on(table.parentId),
		catalogLotRequestOrganization: index("Catalog_Lot_Request_Organization").on(table.organizationId),
		catalogLotRequestOrganizationInn: index("Catalog_Lot_Request_Organization_Inn").on(table.organizationInn),
		catalogLotRequestOrganizationKpp: index("Catalog_Lot_Request_Organization_Kpp").on(table.organizationKpp),
		catalogLotRequestOrganizationOgrn: index("Catalog_Lot_Request_Organization_Ogrn").on(table.organizationOgrn),
		catalogLotRequestOrganizationRole: index("Catalog_Lot_Request_Organization_Role").on(table.organizationRole),
		catalogLotRequestOrganizationGuid: index("Catalog_Lot_Request_Organization_Guid").on(table.organizationGuid),
		catalogLotRequestGuid: index("Catalog_Lot_Request_Guid").on(table.guid),
		fk3A9C03D6727Aca70: foreignKey({
			columns: [table.parentId],
			foreignColumns: [table.id],
			name: "FK_3A9C03D6727ACA70"
		}).onUpdate("restrict").onDelete("restrict"),
	}
});

export const catalogProcedureResponsibleOfficer = mysqlTable("catalog_procedure_responsible_officer", {
	id: int("id").autoincrement().notNull(),
	firstName: varchar("first_name", { length: 300 }).default('').notNull(),
	lastName: varchar("last_name", { length: 300 }).default('').notNull(),
	middleName: varchar("middle_name", { length: 300 }).default('').notNull(),
	email: varchar("email", { length: 255 }).default('').notNull(),
	memberId: int("member_id"),
},
(table) => {
	return {
		idxMember: index("idx_member").on(table.memberId),
		idxEmail: index("idx_email").on(table.email),
	}
});

export const catalogProcedureStatus = mysqlTable("catalog_procedure_status", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }),
	type: varchar("type", { length: 255 }).notNull(),
},
(table) => {
	return {
		catalogProcedureStatusCode: index("Catalog_Procedure_StatusCode").on(table.code),
		catalogProcedureStatusCodeTypeUniq: unique("Catalog_Procedure_StatusCodeTypeUniq").on(table.code, table.type),
	}
});

export const catalogProcedureType = mysqlTable("catalog_procedure_type", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	abbreviation: varchar("abbreviation", { length: 255 }).notNull(),
	orderPriority: int("orderPriority"),
},
(table) => {
	return {
		catalogProcedureTypeCode: index("Catalog_Procedure_Type_Code").on(table.code),
	}
});

export const catalogSphinxDeltaCounter = mysqlTable("catalog_sphinx_delta_counter", {
	indexName: varchar("index_name", { length: 255 }).notNull(),
	counter: int("counter").notNull(),
	datetime: datetime("datetime", { mode: 'string'}).notNull(),
},
(table) => {
	return {
		indexName: unique("index_name").on(table.indexName),
	}
});

export const doctrineMigrationVersions = mysqlTable("doctrine_migration_versions", {
	version: varchar("version", { length: 255 }).notNull(),
});

export const integrationCatalogPacket = mysqlTable("integration_catalog_packet", {
	id: int("id").autoincrement().notNull(),
	typeId: int("type_id").references(() => integrationCatalogPacketType.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	statusId: int("status_id").references(() => integrationCatalogPacketStatus.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	guid: varchar("guid", { length: 255 }),
	objectId: varchar("object_id", { length: 255 }),
	realName: longtext("real_name"),
	title: longtext("title"),
	uri: longtext("uri"),
	hash: varchar("hash", { length: 100 }),
	description: longtext("description"),
	createdAt: timestamp("created_at", { mode: 'string' }).default('0000-00-00 00:00:00').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('CURRENT_TIMESTAMP').onUpdateNow().notNull(),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
},
(table) => {
	return {
		idx4E24Cd91C54C8C93: index("IDX_4E24CD91C54C8C93").on(table.typeId),
		idx4E24Cd916Bf700Bd: index("IDX_4E24CD916BF700BD").on(table.statusId),
		integrationCatalogPacketObjectId: index("Integration_Catalog_Packet_ObjectID").on(table.objectId),
		uniq4E24Cd912B6Fcfb2: unique("UNIQ_4E24CD912B6FCFB2").on(table.guid),
	}
});

export const integrationCatalogPacketStatus = mysqlTable("integration_catalog_packet_status", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
},
(table) => {
	return {
		uniq297054B777153098: unique("UNIQ_297054B777153098").on(table.code),
	}
});

export const integrationCatalogPacketType = mysqlTable("integration_catalog_packet_type", {
	id: int("id").autoincrement().notNull(),
	code: varchar("code", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
},
(table) => {
	return {
		uniqE80493Fe77153098: unique("UNIQ_E80493FE77153098").on(table.code),
	}
});

export const organizationProcedureRegulatedDatetime = mysqlTable("organization_procedure_regulated_datetime", {
	id: int("id").autoincrement().notNull(),
	procedureId: int("procedure_id").references(() => catalogProcedure.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	organization: varchar("organization", { length: 255 }).notNull(),
	regulatedDatetime: datetime("regulated_datetime", { mode: 'string'}),
},
(table) => {
	return {
		idx83326F291624Bcd2: index("IDX_83326F291624BCD2").on(table.procedureId),
	}
});

export const procedureAccess = mysqlTable("procedure_access", {
	id: int("id").autoincrement().notNull(),
	userOperatorId: int("user_operator_id"),
	userOperatorGuid: varchar("user_operator_guid", { length: 255 }),
	userId: int("user_id"),
	userGuid: varchar("user_guid", { length: 255 }),
	active: tinyint("active").notNull(),
	createDatetime: datetime("create_datetime", { mode: 'string'}),
	procedureNumber: varchar("procedure_number", { length: 255 }),
	procedureType: varchar("procedure_type", { length: 10 }),
	procedureId: int("procedure_id"),
	placerInn: varchar("placer_inn", { length: 50 }),
});