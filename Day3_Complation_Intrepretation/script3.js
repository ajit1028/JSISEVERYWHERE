/*
  Compilation and Interpretation   

  Compilation:    HLL -> Compiler -> MLL -> Microprocessor -> o/p
                compiler converts high level language(line by line) code into machine level language(line by line ) in one shot (all code at a time).
                then MLL codes goes to Microprocessor and gives the output.
  Example: C,C++, Java
    

  Interpretetation:   HLL -> Intrepreter ->  MLL -> Microprocessor -> o/p         
                                  |                    |                                  
                                  |---------<-------<--|                                 
                     intrepreter converts one instruction at a time and converts  from HLL  to MLL
                    and give to the microprocessor and then after giving o/p , microprcessor send control to the intrepreter
                     and then it takes 2nd line and converts from HLL to MLL then give to microprossor then same gon on till last line of HLL. 
   Example: JavaScript,Python                  
                     
    Compilation is faster as compare to intrepretation.  
    
  javascript is intrepretaion typed language and every intrepreted language can be run in two modes first one is 
   1: script mode -> script is a file that inside which there is javascript code. 
                    after completinng the program only then you can run it.

   2: intractive mode -> now go to the terminal and type node that is known as intreactive mode you can run javascript code there.
                        i hope you did this and you observe there that you run one line at a time this facility is only available at intrrepreter type language.
                         
   
   every browser has created their own engine to intract with javascript. like chrome has V8 engine.
 */

console.log("Hello");
console.log(2 + 2);
console.log(2 * 3);

/* in terminal after going that path  :JsIsEverywhere/Day3_Complation_Intrepretation (main)
    node script3.js 
  javascript take above  code(HLL (line 31,32,33)) and then give it to the intrepreter.now intrepreter convert hll -> mll . now microprocessor   gives o/p "Hello".
   then again it goes to the intrepretor and after doing all process gives o/p 4.then again same 6.
 */
