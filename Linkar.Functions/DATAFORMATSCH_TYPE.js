/*
	enum: DATAFORMATSCH_TYPE
	Specify the output formats of LkSchemas and LkProperties operations.
	Used only by LkSchemas and LkProperties functions.
	There are 4 possible options: MV, XML, JSON and TABLE.
		
	Defined constants of DATAFORMATSCH_TYPE:
	
		MV - 0x01
		XML - 0x02
		JSON - 0x03
		TABLE - 0x04
*/
const DATAFORMATSCH_TYPE = {
    MV: 0x01,
	XML: 0x02,
	JSON: 0x03,
	TABLE: 0x04,
  }

  module.exports = { DATAFORMATSCH_TYPE }