#include <iostream>
using namespace std;
// info -> here we call's object not variable
struct info{
    int roll = 12;
    char sec = 'A';
    float marks[4] = {2.47, 34.3, 4.3, 46.2};
    string name = "Vishwas";
    struct info *link = NULL;

    void display(){
        cout << name << " " << sec << endl;
    }
    void display(info in){
        cout << "pass structure " << in.name << " " << in.sec << endl;
    }
} stu; //---> 1st way to create variable of structure

int main(){
    // info stu; //---> 2nd way to create variable of structure inside main()
    stu.display();
    stu.display(stu);
    cout << stu.roll << endl;
    // pointer to struction
    info d;
    // we can also initialize value in the form of Array
    d = {12, 'b', {2, 3, 2, 2}, "Gour"};
    d.sec = 'B';
    // here we put addresss of d in stu.lisk
    stu.link = &d;
    cout << stu.link->sec << endl;
    // self refrencial structure
}