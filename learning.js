        alert("alert message will come")
        document.write('Show content on body');
        document.write("<br>");

        var a = "test"
        document.write(a);
        document.write("<br>");

        var x = 5;
        var y = 10;
        var z = x + y;
        document.write(z)
        document.write("<br>");

        var b = 100;
        document.write(typeof(b));
        document.write("<br>");

        var boolean = false;
        document.write(boolean);
        document.write("<br>");

        var a = 10;
        var b = 20;
        var sum = (a + b);
        document.write(sum);
        document.write("<br>");

        var x = "sumit";
        var y = "gulati";
        document.write(x + " "+ y);
        document.write("<br>");

        var number = 10;
        //number = number + 5;
        number += 20;
        document.write(number);
        document.write("<br>");

        var marks = 100;
        if(marks == 200){
            document.write("this value is corret");
        }else{
            document.write("this value is incorrect");
        }
        document.write("<br>");

        var a = 1;
        var b = "1";
        if(a !== b){
            document.write("value is equal");
        }else{
            document.write("value is not equal");
        }
        document.write("<br>");

        var i = 1
        while(i<=5){
            document.write(i++)
            document.write("<br>");
        }

        var i = 2;
        var j = 1;
        while(i<=10){
            document.write("2"+"*"+j+" = "+i)
            
            i = i +2;
            j++
            document.write("<br>");
        }

        var i = 15;
        do{
            document.write(i)
            i++
            document.write("<br>");
        }while(i<=20)

        var a;
        for(a=1; a<25;a++){ 25 < 25
            document.write(a);
            document.write("<br>");
        }

        sumit ();

        function sumit(){
            var a = 10;
            var b = 20;
            var add = a + b;
            document.write(add);
            document.write("<br>");
        }

        ques ( 10, 20);
        ques ( 40, 20);
        ques ( 100, 120);

        function ques(a , b){
            var add = a + b;
            document.write(add);
            document.write("<br>");
        }

        var friends = ['ram', 'shyam', 'test'];
        document.write(friends[2])
        document.write("<br>");

        var friends = new Array('ram', 'shyam', 'test')
        document.write(friends)
        document.write("<br>");


        var array = ['sumit', 'gulati', 'test'];
        var length = array.length;
        document.write (length);
        document.write("<br>");

        var array = ['sumit', 'gulati', 'test'];
        array.sort()
        document.write (array);
        document.write("<br>");

        var array = ['sumit', 'gulati', 'test'];
        array.push("india")
        document.write (array);
        document.write("<br>");

        var array = ['sumit', 'gulati', 'test'];
        array.pop()
        document.write (array);
        document.write("<br>");

        var array = ['sumit', 'gulati', 'test'];
        array.shift()
        document.write (array);
        document.write("<br>");

        var array = ['sumit', 'gulati', 'test'];
        array.reverse()
        document.write (array);
        document.write("<br>");

        var array = ['sumit', 'gulati', 'test'];
        var check = Array.isArray(array)
        document.write (check);
        document.write("<br>");

        window.onload = function() {
            var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
            var test = "";
            var i;
            for (i = 0; i < cars.length; i++) {
                test += cars[i] + "<br>";
            }
            document.getElementById("demo").innerHTML = test;
        }

        
        function myFunction() {
            var person = prompt("Please enter your name", "sumit gulati");
            if (person != null) {
              document.getElementById("demo").innerHTML =
              "Hello " + person + "! How are you today?";
            }
        }

        var budget = prompt('What is your budget?');
            if (parseInt(budget) < 500) {
                alert('GO AWAY');
            }
            else {
                alert('That will do');
        }



          