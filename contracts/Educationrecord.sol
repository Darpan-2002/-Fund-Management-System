// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EducationRecords {
    uint public recordId;
    mapping(uint => Record) records;
    mapping(uint => bool) public isDeleted;

    struct Record {
        uint recordId;
        uint timestamp;
        string studentName;
        uint studentAge;
        string gender;
        string courseName;
        string grade;
        string institution;
        string achievements;
    }

    event EducationRecords__AddRecord(
        uint recordId,
        uint timestamp,
        string studentName,
        uint studentAge,
        string gender,
        string courseName,
        string grade,
        string institution,
        string achievements
    );

    event EducationRecords__DeleteRecord(
        uint recordId,
        uint timestamp,
        string studentName,
        uint studentAge,
        string gender,
        string courseName,
        string grade,
        string institution,
        string achievements
    );

    function addRecord(
        string memory _studentName,
        uint _studentAge,
        string memory _gender,
        string memory _courseName,
        string memory _grade,
        string memory _institution,
        string memory _achievements
    ) public {
        recordId++;
        records[recordId] = Record(
            recordId,
            block.timestamp,
            _studentName,
            _studentAge,
            _gender,
            _courseName,
            _grade,
            _institution,
            _achievements
        );
        emit EducationRecords__AddRecord(
            recordId,
            block.timestamp,
            _studentName,
            _studentAge,
            _gender,
            _courseName,
            _grade,
            _institution,
            _achievements
        );
    }

    function deleteRecord(uint _recordId) public {
        require(!isDeleted[_recordId], "The record is already deleted");
        Record storage record = records[_recordId];
        emit EducationRecords__DeleteRecord(
            record.recordId,
            block.timestamp,
            record.studentName,
            record.studentAge,
            record.gender,
            record.courseName,
            record.grade,
            record.institution,
            record.achievements
        );
        isDeleted[_recordId] = true;
    }

    function getRecord(
        uint _recordId
    )
        public
        view
        returns (
            uint,
            string memory,
            uint,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Record storage record = records[_recordId];
        return (
            record.timestamp,
            record.studentName,
            record.studentAge,
            record.gender,
            record.courseName,
            record.grade,
            record.institution,
            record.achievements
        );
    }

    function getRecordId() public view returns (uint) {
        return recordId;
    }

    function getTimeStamp(uint _recordId) public view returns (uint) {
        return records[_recordId].timestamp;
    }

    function getStudentName(uint _recordId) public view returns (string memory) {
        return records[_recordId].studentName;
    }

    function getStudentAge(uint _recordId) public view returns (uint) {
        return records[_recordId].studentAge;
    }

    function getGender(uint _recordId) public view returns (string memory) {
        return records[_recordId].gender;
    }

    function getCourseName(uint _recordId) public view returns (string memory) {
        return records[_recordId].courseName;
    }

    function getGrade(uint _recordId) public view returns (string memory) {
        return records[_recordId].grade;
    }

    function getInstitution(uint _recordId) public view returns (string memory) {
        return records[_recordId].institution;
    }

    function getAchievements(uint _recordId) public view returns (string memory) {
        return records[_recordId].achievements;
    }

    function getDeleted(uint256 _recordId) public view returns (bool) {
        return isDeleted[_recordId];
    }
}
