#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter value ";
    cin>>n;
    cout<<"Half Pyramid"<<endl;
    for(int i=0;i<n ;i=i+1)
    {
        for(int j=0;j<i+1 ;j=j+1)
        {
            cout<<"7 ";
        }
        cout<<endl;
    }
    cout<<"Inverted Half Pyramid"<<endl;



    
    for(int i=0;i<n ;i=i+1)
    {
        for(int j=0;j<n-i ;j=j+1)
        {
            cout<<"7 ";
        }
        cout<<endl;
    }
}