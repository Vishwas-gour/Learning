#include <iostream>
using namespace std;
namespace Boss{
    class student{
    public:void show(){
            cout << "I am show" << endl;
        }

    public:void name(){
            cout << "I am Vishwas" << endl;
        }
    } boss;
}
using namespace Boss;
int main(){

    Boss::boss.show(); // without using namespace Boss;
    boss.name();
}