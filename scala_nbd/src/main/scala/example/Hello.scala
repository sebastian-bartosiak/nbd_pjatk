object HelloWorld {
   def main(args: Array[String]) {
      println("=========  Ex1  =========");
      ex1();

      println("=========  Ex2  =========");
      ex2();

      println("=========  Ex3  =========");
      ex3();

      println("=========  Ex4  =========");
      ex4();

      println("=========  Ex5  =========");
      ex5();

      println("=========  Ex6  =========");
      ex6();

      println("=========  Ex7  =========");
      ex7();

      println("=========  Ex8  =========");
      ex8();

      println("=========  Ex9  =========");
      ex9();

      println("=========  Ex10  =========");
      ex10();
   }

   def ex1(){
        var days = List("Poniedzialek", "Wtorek", "Sroda", "Czwartek", "Piatek", "Sobota", "Niedziela");

        println("=========  Ex1 a =========");
        for (i <- days) {
            println(i)
        }

        println("=========  Ex1 b =========");
        for (i <- days if i.startsWith("P")) {
            println(i)
        }

        println("=========  Ex1 c =========");
        days.foreach(println)

        println("=========  Ex1 d =========");
        var i = 0;
        while(i < days.length){
            println(days(i));
            i += 1;
        }

        println("=========  Ex1 e =========");
        def printList(list: List[String]) : String = {
            if(list.isEmpty) {
                return ""
            }
            return list.head + "\n" + printList(list.tail)
        }

        println(printList(days));

        println("=========  Ex1 f =========");
        def printListReverse(list: List[String]) : String = {
            if(list.isEmpty) {
                return ""
            }
            return printListReverse(list.tail) + list.head + "\n"
        }
        println(printListReverse(days));

        println("=========  Ex1 g =========");
        var res1g = days.foldLeft(""){(acc, i) => acc + i + "\n" }
        println(res1g)

        var res1g2 = days.foldRight(""){(i, acc) => acc + i + "\n" }
        println(res1g2);

        println("=========  Ex1 h =========");
        var res1h = days.foldRight(""){(i, acc) =>
            if(i.startsWith("P")){
                acc + i + "\n";
            }
            else{
               acc 
            }
        }
        println(res1h);
   }

   def ex2(){
       var map1 = Map("jajka" -> 3.10, "chleb" -> 2.90, "woda" -> 2.15 , "mleko" -> 4.0);
       var map2 = map1 map { case (k,v) => (k, v*0.9) };
       println(map2); 
   }

   def ex3(){
        val f: ((Int, String, Boolean)) => Any = { case (a,b,c) => { println(a); println(b); println(c); } }
        var tupl = (2, "text", false);

        f(tupl);
   }

   def ex4(){
        var m1 = Map("jajka" -> 3.10, "chleb" -> 2.90, "woda" -> 2.15 , "mleko" -> 4.0);

        def show(x: Option[Double]) = x match {
            case Some(s) => s
            case None => "?"
        }

       println(show(m1.get("jajka")));
       println(show(m1.get("jajka20")));

   }

   def ex5(){
        var workingDays = List("Poniedzialek", "Wtorek", "Sroda", "Czwartek", "Piatek");
        var weekendDays = List("Sobota", "Niedziela");

        def parseDay(x: String) = x match {
            case "Poniedzialek" => "Praca"
            case "Wtorek" => "Praca"
            case "Sroda" => "Praca"
            case "Czwartek" => "Praca"
            case "Piatek" => "Praca"
            case "Sobota" => "Weekend"
            case "Niedziela" => "Weekend"
            case _ => "Nie ma takiego dnia"
        }

        println(parseDay("Wtorek"));
        println(parseDay("Sobota"));
        println(parseDay("Wtorek123"));
   }


   def ex6(){
       class Konto(_saldoPoczatkowe: Int){
           def this() = this(0)

           private var _saldo = _saldoPoczatkowe;
           
           def stanKonta = _saldo;

           def wplac(kasa: Int){
               _saldo += kasa;
           }

           def wyplac(kasa: Int){
               _saldo -= kasa;
           }
       }

        var konto1 = new Konto();
        println(konto1.stanKonta);
        konto1.wplac(20)
        println(konto1.stanKonta);
        konto1.wyplac(10)
        println(konto1.stanKonta);

        //error
        //konto1.stanKonta = 200;

        var konto2 = new Konto(100);
        println(konto2.stanKonta);
   }

   def ex7(){
       case class Osoba(val firstName: String, val lastName: String){
       }

       var person1 = new Osoba("Jan", "Kowalski");
       var person2 = new Osoba("Adam", "Adamski");
       var person3 = new Osoba("Pawel", "Pawelski");
       var person4 = new Osoba("Kuba", "Kubowski");

       def sayHi(person: Osoba) = person match{
           case Osoba("Jan", "Kowalski") => "Hello Jan"
           case Osoba("Adam", "Adamski") => "Czesc Adam"
           case _ => "Dzień dobry"
       }

       println(sayHi(person1))
       println(sayHi(person2))
       println(sayHi(person3))
   }

   def ex8(){
       def removeZero(list : List[Int]) : List[Int] ={
           return list.filter(e => e != 0);
       }

       println(removeZero(List(0,2,4,6,7,8,9,2,0,4,4)))
   }


   def ex9(){
       def addOne(list : List[Int]) : List[Int] ={
           return list.map(e => e+1);
       }

       println(addOne(List(0,2,4,6,7,8,9,2,0,4,4)))
   }

   def ex10(){
       def specialABS(list : List[Int]) : List[Int] ={
           return list.filter(e => e > -5 && e < 12)
                      .map(e => scala.math.abs(e));
       }

       println(specialABS(List(0,-2,-14,16,7,8,9,2,0,4,4)))
   }
}

