// object
const customer : {
        name: string,
        age: number
      } = {
        name:"Hector",
        age: 23
      };


      // array
      const skills: string[] = ["Java", "C#", "Python"];

      for(const skill of skills){
        console.log(skill);
      };

      //tuple

      let file:[string,string] = ["Casa", "Apartamento"];

      file = ["Casa", "Apartamento"];



      enum colors{red, blue, green};



      const value:any = true;


      // union

      function merge(first: number | string, second: number | string)
      {
        if (typeof first === "number" && typeof second === "number")
        {
          console.log(first + second);
        }

        if (typeof first === "string" && typeof second === "string")
        {
          console.log(first.toString() + second.toString());
        }
      }


      merge("casa", " hoy");

      const data : (string | number)[] = [1,2,3,4,5, "casa"];

      type difficulties = 1|2|3

      function fight(difficulty: difficulties)
      {
         console.log("Start fight! 2")
      }


      fight(3);




      function process(n1:number, n2:number, cb:(result:number) => void)
      {
        const result =  n1 + n2;
        cb(result);
      }

      // callback
      process(10,10,(x) => {
        console.log(x);
      });
