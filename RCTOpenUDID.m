//
//  RCTOpenUDID.m
//  RCTOpenUDID
//
//  Created by zhangds on 15/11/20.
//  Copyright © 2015年 zhangds. All rights reserved.
//

#import "RCTOpenUDID.h"
#import "OpenUDID.h"
#import "RCTUtils.h"

@implementation RCTOpenUDID
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getOpenUDID:(RCTResponseSenderBlock)callback
                  withErrorCallback:(RCTResponseErrorBlock)errorCallback)
{
    NSError* error;
    NSString* openUDID = [OpenUDID valueWithError:&error];
    if (error && ([error code] != kOpenUDIDErrorNone)) {
        errorCallback(RCTErrorWithMessage(@"OpenUDID is unavailable."));
    } else {
        callback(@[openUDID]);
    }
}

@end
