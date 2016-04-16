//
// Moment.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation


public class Moment: JSONEncodable {

    public var id: String?
    public var _type: String?
    public var time: NSDate?
    public var value: String?
    

    public init() {}

    // MARK: JSONEncodable
    func encodeToJSON() -> AnyObject {
        var nillableDictionary = [String:AnyObject?]()
        nillableDictionary["id"] = self.id
        nillableDictionary["type"] = self._type
        nillableDictionary["time"] = self.time?.encodeToJSON()
        nillableDictionary["value"] = self.value
        let dictionary: [String:AnyObject] = APIHelper.rejectNil(nillableDictionary) ?? [:]
        return dictionary
    }
}
