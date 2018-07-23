import {CubeDemo} from './pipe'

describe('Cube operation',()=>{
it('cube of number is',()=>{

    var c=new CubeDemo();
    let NoCube=c.transform(8)
    expect(51).toEqual(NoCube);
})

})

// describe('Arithmatic Operation',()=>{
//     it('multiplication of two positive numbers',()=>{
    
//     var obj =new ArithmaticOperationComponent();
//     let result=obj.multiplication(5,6)
//     expect(-30).toEqual(result);
    
//     })
//     })