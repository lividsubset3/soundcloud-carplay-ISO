//
//  ContentView.swift
//  Shared
//
//  Created by pat on 3/24/21.
//
//

import SwiftUI

let lightGreyColor = Color(red: 239.0 / 255.0, green: 243.0 / 255.0, blue: 244.0 / 255.0, opacity: 1.0)

let storeUser = "Livid"
let storePass = "pass"

struct ContentView: View {

    @State var username: String = ""
    @State var password: String = ""

    @State var authDidFail: Bool = false
    @State var authDidAcc:  Bool = false

    var body: some View {
        ZStack {
            VStack {
                WelcomeText()
                UsernameTextField(username: $username)
                PasswordSecureField(password: $password)
                if authDidFail {
                    Text("Auth Fail")
                            .offset(y: -10)
                            .foregroundColor(.red)
                }
                if authDidAcc {
                    Text("Auth Succeed!")
                            .offset(y: -10)
                            .foregroundColor(.green)
                }
                Button(action: {
                    if self.username == storeUser && self.password == storePass {
                        self.authDidAcc = true
                        self.authDidFail = false
                    } else {
                        self.authDidFail = true
                        self.authDidAcc = false
                    }
                }) {
                    LoginButtonContent()
                }
            }.padding()
        }
    }
}

#if DEBUG
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
#endif

struct WelcomeText: View {
    var body: some View {
        return Text("Welcome!")
                .font(.largeTitle)
                .fontWeight(.semibold)
                .padding(.bottom, 20)
    }
}

struct UsernameTextField: View {
    @Binding var username: String
    var body: some View {
        return TextField("Username", text: $username)
                .padding()
                .background(lightGreyColor)
                .cornerRadius(5.0)
                .padding(.bottom, 20)
    }
}

struct PasswordSecureField: View {
    @Binding var password: String
    var body: some View {
        return SecureField("Password", text: $password)
                .padding()
                .background(lightGreyColor)
                .cornerRadius(5.0)
                .padding(.bottom, 20)
    }
}

struct LoginButtonContent: View {
    var body: some View {
        return Text("LOGIN")
            .padding()
            .foregroundColor(.white)
            .font(.headline)
            .frame(width: 220, height: 60)
            .background(Color.green)
            .cornerRadius(15.0)
    }
}

