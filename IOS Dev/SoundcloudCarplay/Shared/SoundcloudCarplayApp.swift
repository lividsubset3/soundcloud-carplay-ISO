//
//  SoundcloudCarplayApp.swift
//  Shared
//
//  Created by pat on 3/22/21.
//
//

import SwiftUI

@main
struct SoundcloudCarplayApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
