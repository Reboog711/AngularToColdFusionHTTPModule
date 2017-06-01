<cfajaxproxy cfc="Remote" jsclassname="Remote">
<cfoutput>
    <script language="javascript" type="text/javascript">
        var oRemote = new Remote();
        alert(oRemote.getResults([1,2]));
    </script>
</cfoutput>