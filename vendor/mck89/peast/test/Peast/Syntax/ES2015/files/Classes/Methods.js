class Jim extends Person
{
    ["get" + "name"]() {
        return this.name;
    }
    
    *count(){
        var i = 0;
          while (true) yield i++;
    };
    
    static scream() {
        alert("AAAAAAAA!!!!")
    }
    
    static ["scream" + "B"]() {
        alert("BBBBBBBBBB!!!!")
    }
    
    1(){}
    
    get(){
        return this.name;
    }
    
    set(n, m){
        this.name = n + m;
    }
}