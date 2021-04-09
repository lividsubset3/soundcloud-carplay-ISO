//
//  ContentView.swift
//  Shared
//
//  Created by pat on 3/24/21.
//
//

import SwiftUI

let lightGreyColor = Color(red: 239.0 / 255.0, green: 243.0 / 255.0, blue: 244.0 / 255.0, opacity: 1.0)

struct ContentView: View {

    @State var username: String = ""
    @State var password: String = ""

    var body: some View {
        VStack {
            WelcomeText()
            UsernameTextField(username: $username)
            PasswordSecureField(password: $password)
            Button(action: { print("Button tapped") }) {
            }
        }.padding()
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
