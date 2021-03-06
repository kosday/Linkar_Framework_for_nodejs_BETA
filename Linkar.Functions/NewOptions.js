var DBMV_Mark = require('./DBMV_Mark')
var ReadAfterCommonOptions = require('./ReadAfterCommonOptions')
var RecordIdType = require('./RecordIdType')

/*
	Class: NewOptions
		Object that works as an argument in New function and defines the function options.
	
	Property: ActiveTypeLinkar
		boolean
		
		Indicates that the RecordIdType *Linkar* is enabled.
		
	Property: ActiveTypeRandom
		boolean
		
		Indicates that the RecordIdType *Random* is enabled.
	
	Property ActiveTypeCustom
		boolean
		
		Indicates that the RecordIdType *Custom* is enabled.
		
	Property: Prefix
		string
		
		(For RecoverIdType *Linkar*)
		A prefix to the code
		
	Property: Separator
		string
		
		(For RecoverIdType *Linkar*)
		The separator between the prefix and the code.
		The allowed separators list is: ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~

	Property: FormatSpec
		string
		
		(For RecoverIdType *Linkar*)
		The code format, under the Database syntax.
		
	Property: Numeric
		boolean
		
		(For RecoverIdType *Random*)
		 Indicates if the code must be numeric.
		 
	Property: Length
		number
		
		(For RecoverIdType *Random*)
		Length of the code to create. It must be bigger than 0.
*/
class NewOptions
{
	/*
		Constructor: constructor
			Initializes a new instance of the NewOptions class.
			
		Arguments:
			recordIdType - (<RecordIdType>) Specifies the technique for generating item IDs. Mandatory if no registration codes are indicated in the New functions.
			readAfter - (boolean) Reads the record again and returns it after the update. Calculated, conversion, formatSpec and originalRecords will only be applied if this option is true.
			calculated - (boolean) Return the resulting values from the calculated dictionaries.
			conversion - (boolean) Execute the defined conversions in the dictionaries before returning.
			formatSpec - (boolean) Execute the defined formats in the dictionaries before returning.
			originalRecords- (boolean) Return a copy of the records in MV format.
	*/
	constructor(recordIdType = new RecordIdType.RecordIdType(), readAfter = false, calculated = false, conversion = false, formatSpec = false, originalRecords = false){

	this.RecordIdType = recordIdType;
	if (!this.RecordIdType)
		this.RecordIdType = new RecordIdType.RecordIdType();
	this.ActiveTypeLinkar = this.RecordIdType.ActiveTypeLinkar;
	this.Prefix = this.RecordIdType.Prefix;
	this.Separator = this.RecordIdType.Separator;
	this.FormatSpec = this.RecordIdType.FormatSpec;
	this.ActiveTypeRandom = this.RecordIdType.ActiveTypeLinkar;
	this.Numeric = this.RecordIdType.Numeric;
	this.Length = this.RecordIdType.Length;
	this.ActiveTypeCustom = this.RecordIdType.ActiveTypeCustom;

	if (readAfter)
		this.ReadAfterCommonOptions = new ReadAfterCommonOptions.ReadAfterCommonOptions(readAfter, calculated, conversion, formatSpec, originalRecords)
	else
		this.ReadAfterCommonOptions = new ReadAfterCommonOptions.ReadAfterCommonOptions(readAfter, false, false, false, false)
		
	this.ReadAfter = this.ReadAfterCommonOptions.ReadAfter;
	this.Calculated = this.ReadAfterCommonOptions.Calculated;
	this.Conversion = this.ReadAfterCommonOptions.Conversion;
	this.FormatSpec = this.ReadAfterCommonOptions.FormatSpec;
	this.OriginalRecords = this.ReadAfterCommonOptions.OriginalRecords;
	}

	/*
		Function: GetString
			Composes the New options string for processing through LinkarSERVER to the database.
			
		Returns:
			string
		
			The string ready to be used by LinkarSERVER.
	*/
	GetString()
	{
		var str = this.RecordIdType.GetStringAM() + DBMV_Mark.AM_str +
					this.ReadAfterCommonOptions.GetStringAM();
		return str;
    }
}

module.exports = {NewOptions}
