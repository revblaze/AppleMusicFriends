//
//  ViewController.swift
//  Friends
//
//  Created by Justin Bush on 2021-06-09.
//

import Cocoa
import WebKit

class ViewController: NSViewController, NSWindowDelegate, WKUIDelegate, WKNavigationDelegate, WKScriptMessageHandler {

    @IBOutlet weak var webView: WKWebView!
    @IBOutlet weak var detailWebView: WKWebView!
    
    var webViewURLObserver: NSKeyValueObservation?
    
    override func viewDidLoad() {
        super.viewDidLoad()

        webViewURLObserver = webView.observe(\.url, options: .new) { [weak self] webView, change in
            self?.urlDidChange("\(String(describing: change.newValue))") }
    }

    
    
    // MARK:- JavaScript Message Handler
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if message.name == "eventListeners" {
            if let message = message.body as? String {
                if debug { print("> \(message)") }
                /*
                if message.contains("[scroll] largeHeader") {
                    headerView.toggle(to: .large)
                }
                */
            }
        }
    }
    
    
    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }


}

