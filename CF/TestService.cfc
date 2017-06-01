<cfcomponent displayName="TestService" hints="I am a Test Service for an Angular Article">

	<cffunction name="echo" returnformat="plain" access="remote" output="true" >
		<cfargument name="value" type="string" required="true"  />

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
		</cfmail>

		<cfreturn arguments.value />
	</cffunction>

	<cffunction name="echoNumber" returnformat="plain" access="remote" output="true" >
		<cfargument name="value" type="numeric" required="true"  />

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
		</cfmail>

		<cfreturn arguments.value />
	</cffunction>

	<cffunction name="echoBoolean" returnformat="plain" access="remote" output="true" >
		<cfargument name="value" type="boolean" required="true"  />

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
		</cfmail>

		<cfreturn arguments.value />
	</cffunction>

	<cffunction name="echoDate" returnformat="plain" access="remote" output="true" >
		<cfargument name="value" type="date" required="true"  />

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
			<cfdump var="#arguments#" label="arguments" />
		</cfmail>

		<cfreturn arguments.value />
	</cffunction>

	<cffunction name="sum" returnformat="plain" access="remote" output="true" hint="I am a Sample CFC" >	
		<cfargument name="num1" type="numeric" required="true"  />	
		<cfargument name="num2" type="numeric" required="true"  />	

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
		</cfmail>

		<cfreturn arguments.num1 + arguments.num2 />
	</cffunction>

	<cffunction name="sumByObject" returnformat="plain" access="remote" output="true" hint="I accept an Object with a num1 and num2 properties and compute the sum, and return the total" >
		<cfargument name="numberObject" type="any" required="true"  />

<!--- convert JSON into array --->
		<cfset local.json = deserializeJSON(arguments.numberObject)/>

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A Test" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
			<cfdump var="#arguments#" label="arguments" />
			<cfdump var="#local#" label="local" />
		</cfmail>
<!---
<cfdump var="#local#" label="form" />
--->
		<cfreturn local.json.num1 + local.json.num2 />

	</cffunction>

	<cffunction name="sumByObjectAsJSON" returnformat="plain" access="remote" output="true" hint="I accept an Object with a num1 and num2 properties and compute the sum, and return the total" >
		<cfargument name="numberObject" type="String" required="true"  />	

		<cfset local.result = 0/>
		
		<!--- convert JSON into array --->
		<cfset local.json = deserializeJSON(arguments.numberObject)/>

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A Test" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
			<cfdump var="#local#" label="form" />
		</cfmail>
		<!---
		<cfdump var="#local#" label="form" />
		--->
		<cfreturn local.json.num1 + local.json.num2 />

	</cffunction>


	<cffunction name="sumByArrayWithArrayArgument" returnformat="plain" access="remote" output="true" hint="I accept an array of numbers and return the total" >
		<cfargument name="numberArray" type="array" required="true"  />

		<cfset local.result = 0/>

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
		</cfmail>

		<cfloop index="local.index" from="1" to="#ArrayLen(numberArray)#">
			<cfset local.result += arguments.numberArray[local.index]/>
		</cfloop>

		<cfreturn local.result />
	</cffunction>

	<cffunction name="sumByArrayAsList" returnformat="plain" access="remote" output="true" hint="I accept an array of numbers and return the total" >
		<cfargument name="numberArray" type="String" required="true"  />

		<cfset local.result = 0/>

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
		</cfmail>

		<cfloop index="local.index" from="1" to="#ListLen(numberArray)#">
			<cfset local.result += listGetat(arguments.numberArray, local.index)/>
		</cfloop>

		<cfreturn local.result />
	</cffunction>

	<cffunction name="sumByArrayWithAnyArgument" returnformat="plain" access="remote" output="true" hint="I accept an array of numbers and return the total" >
		<cfargument name="numberArray" type="any" required="true"  />

		<cfset arguments.numberArray = deserializeJSON(arguments.numberArray)/>

		<cfset local.result = 0/>

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
			<cfdump var="#arguments#" label="form" />
		</cfmail>

		<cfloop index="local.index" from="1" to="#ArrayLen(numberArray)#">
			<cfset local.result += arguments.numberArray[local.index]/>
		</cfloop>

		<cfreturn local.result />
	</cffunction>

	<cffunction name="sumByArrayWithArrayInArrayArgument" returnformat="plain" access="remote" output="true" hint="I accept an array of numbers and return the total" >
		<cfargument name="numberArray" type="array" required="true"  />

		<cfset local.result = 0/>

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
			<cfdump var="#arguments#" label="form" />
		</cfmail>

		<cfloop index="local.index" from="1" to="#ArrayLen(arguments.numberArray[1])#">
			<cfset local.result += arguments.numberArray[1][local.index]/>
		</cfloop>

		<cfreturn local.result />
	</cffunction>

	<cffunction name="sumByArrayInObject" returnformat="plain" access="remote" output="true" hint="I accept an array of numbers and return the total" >
		<cfargument name="numberObject" type="String" required="true"  />

		<cfset local.result = 0/>

		<!--- convert JSON into array --->
		<cfset local.json = deserializeJSON(arguments.numberObject)/>

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
			<cfdump var="#arguments#" label="form" />
			<cfdump var="#local#" label="form" />
		</cfmail>

		<cfloop index="local.index" from="1" to="#ArrayLen(local.json.numberArray)#">
			<cfset local.result += local.json.numberArray[local.index]/>
		</cfloop>

		<cfreturn local.result />
	</cffunction>

	<cffunction name="sumByObjectInObject" returnformat="plain" access="remote" output="true" hint="I accept an Object with a num1 and num2 properties and compute the sum, and return the total" >
		<cfargument name="numberObject" type="String" required="true"  />

		<cfset local.result = 0/>

		<!--- convert JSON into array --->
		<cfset local.json = deserializeJSON(arguments.numberObject)/>

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A Test" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
			<cfdump var="#arguments#" label="form" />
			<cfdump var="#local#" label="form" />
		</cfmail>

		<cfreturn local.json.numberObject.num1 + local.json.numberObject.num2 />

	</cffunction>

	<cffunction name="sumByObjectInsideArray" returnformat="plain" access="remote" output="true" hint="I accept an array of numbers and return the total" >
		<cfargument name="numberArray" type="array" required="true"  />

		<cfset local.result = 0/>

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
			<cfdump var="#arguments#" label="arguments" />
		</cfmail>

		<cfreturn arguments.numberArray[1].num1 + arguments.numberArray[1].num2 />
	</cffunction>



	<cffunction name="sumByArrayAsJSON" returnformat="plain" access="remote" output="true" hint="I accept an array of numbers and return the total" >	
		<cfargument name="numberArray" type="String" required="true"  />	

		<cfset local.result = 0/>
		
		<!--- convert JSON into array --->
		<cfset local.json = deserializeJSON(arguments.numberArray)/>

		<cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
			<cfdump var="#url#" label="url" />
			<cfdump var="#form#" label="form" />
			<cfdump var="#local#" label="form" />
		</cfmail>
		<!---
		<cfdump var="#local#" label="form" />
		--->

		<cfloop index="local.index" from="1" to="#ArrayLen(local.json)#">
			<cfset local.result += local.json[local.index]/>
		</cfloop>

		<cfreturn local.result />
	</cffunction>

    <cffunction name="sumByEmbeddedObjectAsJSON" returnformat="plain" access="remote" output="true" hint="I accept an Object with a numb1 and numb2 properties and compute the sum, and return the total" >
        <cfargument name="numberObject" type="String" required="true"  />

        <cfset local.result = 0/>

<!--- convert JSON into array --->
        <cfset local.json = deserializeJSON(arguments.numberObject)/>

        <cfmail to="jeffry@dot-com-it.com" from="jeffry@dot-com-it.com" subject="A TEst" type="html" >
            <cfdump var="#url#" label="url" />
            <cfdump var="#form#" label="form" />
            <cfdump var="#local#" label="form" />
        </cfmail>
<!---
<cfdump var="#local#" label="form" />
--->
        <cfreturn local.json.numbersObject.num1 + local.json.numbersObject.num2 />

    </cffunction>


</cfcomponent>
