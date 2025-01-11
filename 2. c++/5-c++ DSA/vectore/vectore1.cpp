
#include <iostream>
#include <vector>
using namespace std;
int main()
{
    vector<int> v(2,7);
    v.push_back(3);
    v.push_back(6);
    // v.pop_back();
    cout<<v.size()<<endl;
    cout<<v.capacity()<<endl;
    for(auto a : v){
        cout<<a << " ";
    }
}