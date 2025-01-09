#include <iostream>
using namespace std;
class Parent{
public:
    // virtual specify the copy of function without virtual, if we call class b's funtion then it calls a's same name function 
    virtual void display(){
        cout << "in Parent" << endl;
    }
};

class Child : public Parent{
public:
    void display(){
        cout << "in Child" << endl;
    }
};

int main(){
    Parent *parent_ptr;
    Child child_obj;
    child_obj.Parent::display(); // function specifier
    parent_ptr = &child_obj;
    parent_ptr->display(); // it call's parent function if we can't provide virtual to parent funtion 
}