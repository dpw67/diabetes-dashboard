//
// NewMoment.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation


public class NewMoment: JSONEncodable {

    public var momentId: Int?
    public var name: String?
    public var tag: String?
    

    public init() {}

    // MARK: JSONEncodable
    func encodeToJSON() -> AnyObject {
        var nillableDictionary = [String:AnyObject?]()
        nillableDictionary["momentId"] = self.momentId
        nillableDictionary["name"] = self.name
        nillableDictionary["tag"] = self.tag
        let dictionary: [String:AnyObject] = APIHelper.rejectNil(nillableDictionary) ?? [:]
        return dictionary
    }
}
