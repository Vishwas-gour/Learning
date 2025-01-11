#include <iostream>
#include <vector>
#include <iterator>
#include <algorithm>

using namespace std;
int main()
{
    vector<int> v{43, 23, 64, 74, 34, 75};
    vector<int> v2{213,123,123};

    cout << v.max_size() << endl;
    for (auto p : v)cout << p << " ";
    cout << endl;
    vector<int>::iterator it = v.begin(); //--> points to the begin index
    // vector<int>::iterator it = v.end(); //--> points to the end index
     
    cout << *it << endl;
    v.insert(it + 2, 200);
    v.erase(it + 2);

    for (auto p : v)cout << p << " ";
    cout << endl;
    sort.(v.begin(),v.end(),greater<int>()); // descentding
    sort.(v.begin(),v.end(),less<int>());// asending
    v.swap(v2);
    reverse(v2.begin(),v2.end());


    for (auto &p : v)cout << p << " "; // update by address
    for (auto p : v)cout << p << " ";


}