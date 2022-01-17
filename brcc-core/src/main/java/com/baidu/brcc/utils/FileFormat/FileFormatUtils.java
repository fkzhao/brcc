/*
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.baidu.brcc.utils.FileFormat;

import com.baidu.brcc.domain.exception.BizException;
import com.google.common.base.Splitter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import static com.baidu.brcc.common.ErrorStatusMsg.FILE_IS_EMPTY_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.FILE_IS_EMPTY_STATUS;
import static com.baidu.brcc.common.ErrorStatusMsg.FILE_NAME_INVALID_MSG;
import static com.baidu.brcc.common.ErrorStatusMsg.FILE_NAME_INVALID_STATUS;

public class FileFormatUtils {
    public static void checkFile(MultipartFile file) {
        // check empty
        if (file.isEmpty()) {
            throw new BizException(FILE_IS_EMPTY_STATUS, FILE_IS_EMPTY_MSG);
        }
        // check format
        List<String> nameList = Splitter.on(".").splitToList(file.getOriginalFilename());
        if (nameList.size() <= 1) {
            throw new BizException(FILE_NAME_INVALID_STATUS, FILE_NAME_INVALID_MSG);
        }
        // check name
        if (!nameList.get(nameList.size() - 1).equals("properties")) {
            throw new BizException(FILE_NAME_INVALID_STATUS, FILE_NAME_INVALID_MSG);
        }
    }
}

