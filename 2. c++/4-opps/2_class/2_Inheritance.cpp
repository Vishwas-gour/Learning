#include <iostream>
using namespace std;

//single level, multi level, multiple, hairarichal, hybrid
class School
{
public:
    void display()
    {
        cout << "hello" << endl;
    }
};
// single
class Coaching : public School
{
};
// multi level
class Student : public Coaching
{
};
// multiple
class Multiple : public School, public Coaching
{

};
// hairarichal
class Hairarichal: public Multiple{

};
// hairarichal
class Hairarichal2: public Multiple{

};
// Hybrid
class Hybrid:  public Hairarichal2{

}; 

// ambiguity problem := when one class inherits from multiple class and both have same member then child confuse --> then we use vartual
// vartual 

int main()
{
    Student studet;
    studet.display();
}