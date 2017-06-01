import { Component } from '@angular/core';
import {TestService} from "../services/TestService";

@Component({
  selector: 'my-app',
  templateUrl : './com/dotComIt/sample/main/main.html',
})
export class AppComponent  {

    constructor(private testService: TestService) {
    }

    postObjectNoHeaderResultObject : string;
    onPostObjectNoHeader():void {
        this.testService.echoParameterObjectNoHeader('This does not work').subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postObjectNoHeaderResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postObjectNoHeaderResultObject  = error;
            }
        );
    }

    postStringNoHeaderResultObject : string;
    onPostStringNoHeader():void {
        this.testService.echoParameterStringNoHeader('This does not work').subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postStringNoHeaderResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postStringNoHeaderResultObject  = error;
            }
      );
    }

    postObjectWithHeaderResultObject : string;
    onPostObjectWithHeader():void {
        this.testService.echoParameterObjectWithHeader('This does not work').subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postObjectWithHeaderResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postObjectWithHeaderResultObject  = error;
            }
        );
    }

    postStringWithHeaderResultObject : string;
    onPostStringWithHeader():void {
        this.testService.echoParameterStringWithHeader('This one works').subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postStringWithHeaderResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postStringWithHeaderResultObject  = error;
            }
        );
    }

    postObjectWithHeaderAndTransformResultObject : string;
    onPostObjectWithHeaderAndTransform():void {
        this.testService.echoParameterObjectWithHeaderAndTransform('This One Works').subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postObjectWithHeaderAndTransformResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postObjectWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postNumberWithHeaderAndTransformResultObject : string;
    onPostNumberWithHeaderAndTransform():void {
        this.testService.echoNumberHeaderAndTransform(1).subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postNumberWithHeaderAndTransformResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postNumberWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postBooleanWithHeaderAndTransformResultObject : string;
    onPostBooleanWithHeaderAndTransform():void {
        this.testService.echoBooleanHeaderAndTransform(true).subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postBooleanWithHeaderAndTransformResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postBooleanWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postDateWithHeaderAndTransformResultObject : string;
    onPostDateWithHeaderAndTransform():void {
        this.testService.echoDateHeaderAndTransform(new Date()).subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postDateWithHeaderAndTransformResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postDateWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postSumWithHeaderAndTransformResultObject : string;
    onSumPostWithHeaderAndTransform():void {
        this.testService.sumTwoValuesWithHeaderAndTransform(1, 2).subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postSumWithHeaderAndTransformResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postSumWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postSumObjectWithHeaderAndTransformResultObject : string;
    onSumObjectWithHeaderAndTransform():void {
        this.testService.sumParameterObjectWithHeaderAndTransform({num1:1, num2:2}).subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postSumObjectWithHeaderAndTransformResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postSumObjectWithHeaderAndTransformResultObject  = error;
            }
        );
    }


    postSumArrayAsArrayWithHeaderAndTransformResultObject: string;
    onSumArrayAsArrayWithHeaderAndTransform():void {
        this.testService.sumArrayAsArrayHeaderAndTransform([1, 2, 3, 4, 5]).subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postSumArrayAsArrayWithHeaderAndTransformResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postSumArrayAsArrayWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postSumArrayAsListWithHeaderAndTransformResultObject: string;
    onSumArrayAsListWithHeaderAndTransform():void {
        this.testService.sumArrayAsListHeaderAndTransform("1,2,3,4,5").subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postSumArrayAsListWithHeaderAndTransformResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postSumArrayAsListWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postSumArrayAsAnyWithHeaderAndTransformResultObject: string;
    onSumArrayAsAnyWithHeaderAndTransform():void {
        this.testService.sumArrayAsAnyHeaderAndTransform([1, 2, 3, 4, 5]).subscribe(
            result  => {
                console.log('echo return');
                console.log(result);
                this.postSumArrayAsAnyWithHeaderAndTransformResultObject  = result;
            }, error => {
                console.log(error);
                console.log('echo error');
                this.postSumArrayAsAnyWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postSumEmbeddedArrayWithHeaderAndTransformResultObject : string;
    onSumArrayAsEmbeddedArrayWithHeaderAndTransform():void {
        this.testService.sumEmbeddedArrayHeaderAndTransform([[1, 2, 3, 4, 5]]).subscribe(
            result  => {
                console.log('echo return');
//                console.log(result);
                this.postSumEmbeddedArrayWithHeaderAndTransformResultObject  = result;
            }, error => {
//                console.log(error);
                console.log('echo error');
                this.postSumEmbeddedArrayWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postSumArrayInObjectWithHeaderAndTransformResultObject : string;
    onSumArrayInObjectWithHeaderAndTransform():void {
        this.testService.sumArrayInObjectHeaderAndTransform({numberArray:[1, 2, 3, 4, 5]}).subscribe(
            result  => {
                console.log('echo return');
//                console.log(result);
                this.postSumArrayInObjectWithHeaderAndTransformResultObject  = result;
            }, error => {
//                console.log(error);
                console.log('echo error');
                this.postSumArrayInObjectWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postSumObjectInObjectWithHeaderAndTransformResultObject : string;
    onSumObjectInObjectWithHeaderAndTransform():void {
        this.testService.sumObjectInObjectHeaderAndTransform({numberObject:{num1:5, num2:10}}).subscribe(
            result  => {
                console.log('echo return');
//                console.log(result);
                this.postSumObjectInObjectWithHeaderAndTransformResultObject  = result;
            }, error => {
//                console.log(error);
                console.log('echo error');
                this.postSumObjectInObjectWithHeaderAndTransformResultObject  = error;
            }
        );
    }

    postSumObjectInArrayWithHeaderAndTransformResultObject : string;
    onSumObjectInArrayWithHeaderAndTransform():void {
        this.testService.sumObjectInArrayHeaderAndTransform([{num1:5, num2:10}]).subscribe(
            result  => {
                console.log('echo return');
//                console.log(result);
                this.postSumObjectInArrayWithHeaderAndTransformResultObject  = result;
            }, error => {
//                console.log(error);
                console.log('echo error');
                this.postSumObjectInArrayWithHeaderAndTransformResultObject  = error;
            }
        );
    }

}
