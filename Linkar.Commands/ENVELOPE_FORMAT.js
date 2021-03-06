/*
	enum: ENVELOPE_FORMAT
	Indicates in what format you want to send the command for LkSendCommnad operation.
	There are 2 possible options: XML and JSON.
		
	Defined constants of ENVELOPE_FORMAT:
	
		XML - 0x02
		JSON - 0x03
*/	
const ENVELOPE_FORMAT = {
	XML,
	JSON
  }

  module.exports = { ENVELOPE_FORMAT }