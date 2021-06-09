//
//  AppDelegate.swift
//  Friends
//
//  Created by Justin Bush on 2021-06-09.
//

import Cocoa

let debug = true
let prod = !debug

@main
class AppDelegate: NSObject, NSApplicationDelegate {

    @IBOutlet weak var debugMenu: NSMenuItem!


    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Hide Debug menu if production build
        if prod { debugMenu.isHidden = true }
        
    }

    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
    }


}

