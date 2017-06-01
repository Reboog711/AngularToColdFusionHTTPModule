<cfcomponent output="false">
    <cffunction access="remote" name="getResults"
            returntype="struct"
            returnformat="JSON"
            output="no">

        <cfargument name="q" required="true" type="array" />

        <cfreturn {a=1,b=2}>
    </cffunction>
</cfcomponent>