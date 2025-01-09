
#include <iostream>
#include <vector>
using namespace std;
int main()
{
    vector<int> v;
    v.push_back(23);
    v.push_back(43);
    v.push_back(27);
    v.push_back(93);
    v.push_back(100);
    cout<<v.size()<<endl;
    cout<<v.capacity();
    for(auto a : v){
        cout<<a << " ";
    }
}