/**
 * Created by jhouser on 5/25/2017.
 */

import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

const serviceURL : string = '../CF/TestService.cfc';

import {isObject} from "rxjs/util/isObject";
import {isNumeric} from "rxjs/util/isNumeric";
import {isArray} from "rxjs/util/isArray";
import {isDate} from "rxjs/util/isDate";

import {DatePipe} from "@angular/common";

@Injectable()
export class TestService {


    constructor(private http: Http) {
    }

    echoParameterObjectNoHeader(value:string) : Observable<string> {
        let parameters = {
            method : 'echo',
            value : value
        };
        return this.http.post(serviceURL, parameters)
            .map((result) => result['_body']);
    }

    echoParameterStringNoHeader(value:string) : Observable<string> {
        let parameters : string =  "method=echo&";
        parameters += "value=" + value ;
        return this.http.post(serviceURL, parameters)
            .map((result) => result['_body']);
    }


    createHeader() : RequestOptions {
        let optionHeaders : Headers = new Headers();
        optionHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return new RequestOptions({headers:optionHeaders});
    }

    echoParameterObjectWithHeader(value:string) : Observable<string> {
        let parameters = {
            method : 'echo',
            value : value
        };
        return this.http.post(serviceURL, parameters, this.createHeader())
            .map((result) => result['_body']);
    }

    echoParameterStringWithHeader(value:string) : Observable<string> {
        let parameters : string =  "method=echo&";
        parameters += "value=" + value ;
        return this.http.post(serviceURL, parameters, this.createHeader())
                   .map((result) => {
                        console.log(result);
                        return result['_body'];
                   } );
    }

    echoParameterObjectWithHeaderAndTransform(value:any) : Observable<string> {
        let parameters = {
            method : 'echo',
            value : value
        };
        return this.http.post(serviceURL, this.transform1(parameters), this.createHeader())
            .map((result) => result['_body']);
    }


    transform1 (data:any):string {

        let param = function param(obj : any, separator : string = '='/*, wrapValueInQuotes : boolean = false,
                                   wrapNameInQuotes : boolean = false, ignoreName : boolean = false*/):string {

            let query : string = '';
/*            let objectAsString : string = '';
            let name : string;
            let subName : string;*/

           // keys are always encapsulated in quotes
            // values won't be if it is an array or object
            let nameQuote : string  = "";
/*            if (wrapNameInQuotes) {
                nameQuote = "\"";
            };*/

            let valueQuote : string = "";
/*            if (wrapValueInQuotes) {
                valueQuote = "\"";
            };*/

            for (let name of Object.keys(obj)) {
                let value : any = obj[name];

/*
                if (isNumeric(value)) {
                    // honestly not sure if this needs to be called out independently or if the else condition handles it w/o issue
                    // I don't think encodeURIComponent is needed
                    console.log('is numeric condition');
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    }
                    query += value + '&';
                    console.log(query);
                } else
*/
                if ( (value !== undefined) && (value !== null)) {
                    console.log('else condition');
/*                    if (!ignoreName) {*/
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
/*                    }*/
                    query += valueQuote + encodeURIComponent(value) + valueQuote + '&';
                    console.log(query);
                }
            }
            console.log(query);
            // query substring removes the final ampersand
            return query.length ? query.substr(0, query.length - 1) :query;
        };
        console.log(data);
        return isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }


    echoNumberHeaderAndTransform(value:number) : Observable<string> {
        let parameters = {
            method : 'echoNumber',
            value : value
        };
        return this.http.post(serviceURL, this.transform2(parameters), this.createHeader())
            .map((result) => result['_body']);
    }


    transform2 (data:any):string {

        let param = function param(obj : any, separator : string = '='/*, wrapValueInQuotes : boolean = false,
         wrapNameInQuotes : boolean = false, ignoreName : boolean = false*/):string {

            let query : string = '';
            /*            let objectAsString : string = '';
             let name : string;
             let subName : string;*/

            // keys are always encapsulated in quotes
            // values won't be if it is an array or object
            let nameQuote : string  = "";
            /*            if (wrapNameInQuotes) {
             nameQuote = "\"";
             };*/

            let valueQuote : string = "";
            /*            if (wrapValueInQuotes) {
             valueQuote = "\"";
             };*/

            for (let name of Object.keys(obj)) {
                let value : any = obj[name];

                if (isNumeric(value)) {
                     // honestly not sure if this needs to be called out independently or if the else condition handles it w/o issue
                     // I don't think encodeURIComponent is needed
                     console.log('is numeric condition');
//                    if (!ignoreName) {
                         query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
//                     }
                     query += value + '&';
                     console.log(query);
                } else
                if ( (value !== undefined) && (value !== null)) {
                    console.log('else condition');
                    /*                    if (!ignoreName) {*/
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    /*                    }*/
                    query += valueQuote + encodeURIComponent(value) + valueQuote + '&';
                    console.log(query);
                }
            }
            console.log(query);
            // query substring removes the final ampersand
            return query.length ? query.substr(0, query.length - 1) :query;
        };
        console.log(data);
        return isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }

    echoBooleanHeaderAndTransform(value:boolean) : Observable<string> {
        let parameters = {
            method : 'echoBoolean',
            value : value
        };
        return this.http.post(serviceURL, this.transform3(parameters), this.createHeader())
            .map((result) => result['_body']);
    }


    transform3 (data:any):string {

        let param = function param(obj : any, separator : string = '='/*, wrapValueInQuotes : boolean = false,
         wrapNameInQuotes : boolean = false, ignoreName : boolean = false*/):string {

            let query : string = '';
            /*            let objectAsString : string = '';
             let name : string;
             let subName : string;*/

            // keys are always encapsulated in quotes
            // values won't be if it is an array or object
            let nameQuote : string  = "";
            /*            if (wrapNameInQuotes) {
             nameQuote = "\"";
             };*/

            let valueQuote : string = "";
            /*            if (wrapValueInQuotes) {
             valueQuote = "\"";
             };*/

            for (let name of Object.keys(obj)) {
                let value : any = obj[name];

                if (typeof( value) === "boolean") {
                    console.log('is Boolean');
//                    if (!ignoreName) {
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    //                   }
                    query += value + '&';
                } else
                if (isNumeric(value)) {
                    // honestly not sure if this needs to be called out independently or if the else condition handles it w/o issue
                    // I don't think encodeURIComponent is needed
                    console.log('is numeric condition');
//                    if (!ignoreName) {
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
//                     }
                    query += value + '&';
                    console.log(query);
                } else
                if ( (value !== undefined) && (value !== null)) {
                    console.log('else condition');
                    /*                    if (!ignoreName) {*/
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    /*                    }*/
                    query += valueQuote + encodeURIComponent(value) + valueQuote + '&';
                    console.log(query);
                }
            }
            console.log(query);
            // query substring removes the final ampersand
            return query.length ? query.substr(0, query.length - 1) :query;
        };
        console.log(data);
        return isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }

    echoDateHeaderAndTransform(value:Date) : Observable<string> {
        let parameters = {
            method : 'echoDate',
            value : value
        };
        return this.http.post(serviceURL, this.transform4(parameters), this.createHeader())
            .map((result) => result['_body']);
    }

    transform4 (data:any):string {

        let param = function param(obj : any, separator : string = '='/*, wrapValueInQuotes : boolean = false,
         wrapNameInQuotes : boolean = false, ignoreName : boolean = false*/):string {

            let query : string = '';
            /*            let objectAsString : string = '';
             let name : string;
             let subName : string;*/

            // keys are always encapsulated in quotes
            // values won't be if it is an array or object
            let nameQuote : string  = "";
            /*            if (wrapNameInQuotes) {
             nameQuote = "\"";
             };*/

            let valueQuote : string = "";
            /*            if (wrapValueInQuotes) {
             valueQuote = "\"";
             };*/

            for (let name of Object.keys(obj)) {
                let value : any = obj[name];

                if (isDate(value)) {
                    // todo does not handle times
                    let datePipe: DatePipe = new DatePipe('en-US');
                    console.log('is date');
//                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator;
//                    }
                    query += valueQuote + encodeURIComponent(datePipe.transform(value, 'yyyy-MM-dd')) + valueQuote + '&';
                } else
                if (typeof( value) === "boolean") {
                    console.log('is Boolean');
//                    if (!ignoreName) {
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    //                   }
                    query += value + '&';
                } else
                if (isNumeric(value)) {
                    // honestly not sure if this needs to be called out independently or if the else condition handles it w/o issue
                    // I don't think encodeURIComponent is needed
                    console.log('is numeric condition');
//                    if (!ignoreName) {
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
//                     }
                    query += value + '&';
                    console.log(query);
                } else
                if ( (value !== undefined) && (value !== null)) {
                    console.log('else condition');
                    /*                    if (!ignoreName) {*/
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    /*                    }*/
                    query += valueQuote + encodeURIComponent(value) + valueQuote + '&';
                    console.log(query);
                }
            }
            console.log(query);
            // query substring removes the final ampersand
            return query.length ? query.substr(0, query.length - 1) :query;
        };
        console.log(data);
        return isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }

    sumTwoValuesWithHeaderAndTransform(value1:number, value2: number) : Observable<string> {

        let parameters = {
            method : 'sum',
            num1 : value1,
            num2 : value2
        };
        return this.http.post(serviceURL, this.transform(parameters), this.createHeader())
            .map((result) => result['_body']);
    }


    sumParameterObjectWithHeaderAndTransform(value:any) : Observable<string> {
        let parameters = {
            method : 'sumByObject',
            numberObject : value,
        };
        return this.http.post(serviceURL, this.transform5(parameters), this.createHeader())
            .map((result) => result['_body']);
    }
    transform5 (data:any):string {

        let param = function param(obj : any, separator : string = '=', wrapValueInQuotes : boolean = false,
         wrapNameInQuotes : boolean = false /*, ignoreName : boolean = false*/):string {

            let query : string = '';
            /*            let objectAsString : string = '';
             let name : string;
             let subName : string;*/

            // keys are always encapsulated in quotes
            // values won't be if it is an array or object
            let nameQuote : string  = "";
            if (wrapNameInQuotes) {
                nameQuote = "\"";
            };

            let valueQuote : string = "";
            if (wrapValueInQuotes) {
                valueQuote = "\"";
            };

            for (let name of Object.keys(obj)) {
                let value : any = obj[name];

                if (isDate(value)) {
                    // todo does not handle times
                    let datePipe: DatePipe = new DatePipe('en-US');
                    console.log('is date');
//                    if (!ignoreName) {
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator;
//                    }
                    query += valueQuote + encodeURIComponent(datePipe.transform(value, 'yyyy-MM-dd')) + valueQuote + '&';
                } else
                if (isObject(value)) {
                    console.log('object condition');
                    let objectAsString : string = '';
                    for (let subName in value) {
                        if (value.hasOwnProperty(subName)) {
                            let o = {};
                            o[subName] = value[subName];
                            if (isObject(value[subName])) {
                                objectAsString += param(o, ':', false, true) + ',';
                            } else {
                                objectAsString += param(o, ':', true, true) + ',';
                            }
                        }
                    }
                    // substr removes the final ampersand
                    objectAsString = objectAsString.length ? objectAsString.substr(0, objectAsString.length - 1) :objectAsString;
                    objectAsString = '{' + objectAsString + '}';
                    console.log(objectAsString);
//                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
//                    }
                    query += valueQuote + objectAsString + valueQuote + '&';
                    console.log(query);
                } else
                if (typeof( value) === "boolean") {
                    console.log('is Boolean');
//                    if (!ignoreName) {
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    //                   }
                    query += value + '&';
                } else
                if (isNumeric(value)) {
                    // honestly not sure if this needs to be called out independently or if the else condition handles it w/o issue
                    // I don't think encodeURIComponent is needed
                    console.log('is numeric condition');
//                    if (!ignoreName) {
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
//                     }
                    query += value + '&';
                    console.log(query);
                } else
                if ( (value !== undefined) && (value !== null)) {
                    console.log('else condition');
                    /*                    if (!ignoreName) {*/
                    query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    /*                    }*/
                    query += valueQuote + encodeURIComponent(value) + valueQuote + '&';
                    console.log(query);
                }
            }
            console.log(query);
            // query substring removes the final ampersand
            return query.length ? query.substr(0, query.length - 1) :query;
        };
        console.log(data);
        return isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }

    sumArrayAsArrayHeaderAndTransform(value:any) : Observable<string> {

        let parameters = {
            method : 'sumByArrayWithArrayArgument',
            argumentCollection : {
                numberArray : value
            }
        };
        return this.http.post(serviceURL, this.transform(parameters), this.createHeader())
            .map((result) => result['_body']);
    }

    transform (data:any):string {

        let param = function param(obj : any, separator : string = '=', wrapValueInQuotes : boolean = false,
                                   wrapNameInQuotes : boolean = false , ignoreName : boolean = false):string {

            let query : string = '';

            // keys are always encapsulated in quotes
            // values won't be if it is an array or object
            let nameQuote : string  = "";
            if (wrapNameInQuotes) {
                nameQuote = "\"";
            };

            let valueQuote : string = "";
            if (wrapValueInQuotes) {
                valueQuote = "\"";
            };

            for (let name of Object.keys(obj)) {
                let value : any = obj[name];

                if (isArray(value)) {
                    console.log('Array Condition');

                    // open array notation
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    }
                    query += '[';

                    for (let counter : number = 0; counter < value.length; ++counter) {
                        let subValue : string = value[counter];
                        let fullSubName : string = name + '[' + counter + ']';
                        let innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj, '', false, false, true ) + ',';
                    }
                    // remove last comma
                    query = query.substr(0, query.length - 1);
                    // close array notation
                    query += ']' + '&';

                } else
                // isDate has to be before isObject as dates are objects
                if (isDate(value)) {
                    // todo does not handle times
                    let datePipe: DatePipe = new DatePipe('en-US');
                    console.log('is date');
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator;
                    }
                    query += valueQuote + encodeURIComponent(datePipe.transform(value, 'yyyy-MM-dd')) + valueQuote + '&';
                } else
                if (isObject(value)) {
                    console.log('object condition');
                    let objectAsString : string = '';
                    for (let subName in value) {
                        if (value.hasOwnProperty(subName)) {
                            let o = {};
                            o[subName] = value[subName];
                            if (isObject(value[subName])) {
                                objectAsString += param(o, ':', false, true) + ',';
                            } else {
                                objectAsString += param(o, ':', true, true) + ',';
                            }
                        }
                    }
                    // substr removes the final ampersand
                    objectAsString = objectAsString.length ? objectAsString.substr(0, objectAsString.length - 1) :objectAsString;
                    objectAsString = '{' + objectAsString + '}';
                    console.log(objectAsString);
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    }
                    query += valueQuote + objectAsString + valueQuote + '&';
                    console.log(query);
                } else
                if (typeof( value) === "boolean") {
                    console.log('is Boolean');
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    }
                    query += value + '&';
                } else
                if (isNumeric(value)) {
                    // honestly not sure if this needs to be called out independently or if the else condition handles it w/o issue
                    // I don't think encodeURIComponent is needed
                    console.log('is numeric condition');
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    }
                    query += value + '&';
                    console.log(query);
                } else
                if ( (value !== undefined) && (value !== null)) {
                    console.log('else condition');
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    }
                    query += valueQuote + encodeURIComponent(value) + valueQuote + '&';
                    console.log(query);
                }
            }
            console.log(query);
            // query substring removes the final ampersand
            return query.length ? query.substr(0, query.length - 1) :query;
        };
        console.log(data);
        return isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }

    sumArrayAsListHeaderAndTransform(value:any) : Observable<string> {
        let parameters = {
            method : 'sumByArrayAsList',
            numberArray : value
        };
        return this.http.post(serviceURL, this.transform(parameters), this.createHeader())
            .map((result) => result['_body']);
    }

    sumArrayAsAnyHeaderAndTransform(value:any) : Observable<string> {
        let parameters = {
            method : 'sumByArrayWithAnyArgument',
            numberArray : value
        };
        return this.http.post(serviceURL, this.transform(parameters), this.createHeader())
            .map((result) => result['_body']);
    }

    sumEmbeddedArrayHeaderAndTransform(value:any) : Observable<string> {

        let parameters = {
            method : 'sumByArrayWithArrayInArrayArgument',
            argumentCollection : {
                numberArray : value
            }
        };
        return this.http.post(serviceURL, this.transform(parameters), this.createHeader())
            .map((result) => result['_body']);
    }


    sumArrayInObjectHeaderAndTransform(value:any) : Observable<string> {

        let parameters = {
            method : 'sumByArrayInObject',
            numberObject : value
        };
        return this.http.post(serviceURL, this.transform(parameters), this.createHeader())
            .map((result) => result['_body']);
    }


    sumObjectInObjectHeaderAndTransform(value:any) : Observable<string> {

        let parameters = {
            method : 'sumByObjectInObject',
            numberObject : value
        };
        return this.http.post(serviceURL, this.transform(parameters), this.createHeader())
            .map((result) => result['_body']);
    }

    sumObjectInArrayHeaderAndTransform(value:any) : Observable<string> {

        let parameters = {
            method : 'sumByObjectInsideArray',
            argumentCollection : {
                numberArray : value
            }
        };
        return this.http.post(serviceURL, this.transform(parameters), this.createHeader())
            .map((result) => result['_body']);
    }



    transform_finished (data:any) {

        /*  obj is the value we are converting
            separate is the separator.  If left blank, it will be equal but if we're calling it recursively
                while processing an embedded object, it switches to ':'
            wrapInQuotes will wrap items in quotes; false by default to not wrap an item in quotes; true if
                called recursively processing an embedded object
            ignoreName just processes the value and not the key; False by default; but set to true when called
                recursively processing an array value
        */
        let param = function param(obj : any, separator : string = null, wrapValueInQuotes : boolean = false,
                                   wrapNameInQuotes : boolean = false, ignoreName : boolean = false){

            let query : string = '';
            let objectAsString : string = '';
            let name : string;
            let subName : string;

            if (!separator) {
                separator = '=';
            };
            // keys are always encapsulated in quotes
            // values won't be if it is an array or object
            let nameQuote = "";
            if (wrapNameInQuotes) {
                nameQuote = "\"";
            };

            let valueQuote = "";
            if (wrapValueInQuotes) {
                valueQuote = "\"";
            };

            console.log(Object.keys(obj));
            for (const name of Object.keys(obj)) {
                let value : any = obj[name];
                console.log('outer loop');
                console.log(value);

//                if (value instanceof Object) {
                if (isArray(value)) {
                    console.log('Array Condition');
/* PHP Approach
                    for (let counter : number = 0; counter < value.length; ++counter) {
                        let subValue : string = value[counter];
                        let fullSubName : string = name + '[' + counter + ']';
                        let innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
*/

                    // open array notation
                    // this approach works if the ColdFusion argument is of type any
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    }
                    query += '[';
                    // this approach works if the ColdFusion argument is of type any
//                    query += quote + encodeURIComponent(name) + quote + separator ;
                    for (let counter : number = 0; counter < value.length; ++counter) {
                        let subValue : string = value[counter];
                        console.log('array value');
                        console.log(subValue);
                        let fullSubName : string = name + '[' + counter + ']';
                        let innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj, '', false, false, true ) + ',';
                        console.log('array query');
                        console.log(query);
                    }
                    // remove last comma
                    query = query.substr(0, query.length - 1);
                    // close array notation
                    query += ']' + '&';


/*
                    // this approach works if the ColdFusion argument is of type any
                    query += quote + encodeURIComponent(name) + quote + separator ;
                    for (let counter : number = 0; counter < value.length; ++counter) {
                        let subValue : string = value[counter];
                        console.log('array value');
                        console.log(subValue);
                        let fullSubName : string = name + '[' + counter + ']';
                        let innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj, '', false, true ) + ',';
                        console.log('array query');
                        console.log(query);
                    }
*/


                // isDate has to be before isObject as dates are objects
                } else
                if (isDate(value)) {
                    // todo does not handle times
                    let datePipe : DatePipe = new DatePipe('en-US');
                    console.log('is date');
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator;
                    }
                    query += valueQuote + encodeURIComponent(datePipe.transform(value, 'yyyy-MM-dd')) + valueQuote + '&';
                } else if (isObject(value)) {
                    console.log('object condition');
                    for (subName in value) {
                        if (value.hasOwnProperty(subName)) {
                            let o = {};
                            o[subName] = value[subName];
                            if (isObject(value[subName])) {
                                objectAsString += param(o, ':', false, true) + ',';
                            } else {
                                objectAsString += param(o, ':', true, true) + ',';
                            }
                            console.log(value);
                            console.log(subName);
                            console.log(objectAsString);
                        }
                    }
                    // substr removes the final ampersand
                    objectAsString = objectAsString.length ? objectAsString.substr(0, objectAsString.length - 1) :objectAsString;
                    objectAsString = '{' + objectAsString + '}';
                    console.log(objectAsString);
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    }
                    query += valueQuote + objectAsString + valueQuote + '&';
                    console.log(query);
                } else if (isNumeric(value)) {
                    // honestly not sure if this needs to be called out independently or if the else condition handles it w/o issue
                    // I don't think encodeURIComponent is needed
                    console.log('is numeric condition');
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    }
                    query += value + '&';
                    console.log(query);
                } else if (typeof( value) === "boolean") {
                    console.log('is Boolean');
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator;
                    }
                    query += value + '&';
                } else if ( (value !== undefined) && (value !== null)) {
                    console.log('else condition');
                    if (!ignoreName) {
                        query += nameQuote + encodeURIComponent(name) + nameQuote + separator ;
                    }
                    query += valueQuote + encodeURIComponent(value) + valueQuote + '&';
                    console.log(query);
                }
            }
            console.log(query);
            // query substring removes the final ampersand
            return query.length ? query.substr(0, query.length - 1) :query;
        };
        console.log(data);
        return isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }

}
