import {ArithmaticOperationComponent} from './arithmaticoperation.component';

describe('Arithmatic Operation',()=>{
it('multiplication of two positive numbers',()=>{

var obj =new ArithmaticOperationComponent();
let result=obj.multiplication(5,6)
expect(-30).toEqual(result);

})

})