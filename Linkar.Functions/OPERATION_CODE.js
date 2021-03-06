/*
	enum: OPERATION_CODE
		Operation codes for LkExecuteDirectOperation and LkExecutePersistentOperation functions of Linkar Library
		
		LOGIN - 0x01
		READ - 0x02
		UPDATE - 0x03
		NEW - 0x04
		DELETE - 0x05
		CONVERSION - 0x06
		FORMAT - 0x07
		LOGOUT - 0x08
		GETVERSION - 0x09
		SELECT - 0x0A
		SUBROUTINE - 0x0B
		EXECUTE - 0x0C
		DICTIONARIES - 0x0D
		LKSCHEMAS - 0x0E
		LKPROPERTIES - 0x0F
		GETTABLE - 0x10
		RESETCOMMONBLOCKS - 0x11
*/
const OPERATION_CODE = {
	LOGIN: 0x01,
	READ: 0x02,
	UPDATE: 0x03,
	NEW: 0x04,
	DELETE: 0x05,
	CONVERSION: 0x06,
	FORMAT: 0x07,
	SELECT: 0x0A,
	SUBROUTINE: 0x0B,
	EXECUTE: 0x0C,
	DICTIONARIES: 0x0D,
	LOGOUT: 0x08,
	VERSION: 0x09,
	LKSCHEMAS: 0x0E,
	LKPROPERTIES: 0x0F,
	GETTABLE: 0x10,
	RESETCOMMONBLOCKS: 0x11
}

module.exports = { OPERATION_CODE }
