// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DisasterRecords {
    uint public recordId;
    mapping(uint => Record) records;
    mapping(uint => bool) public isDeleted;

    struct Record {
        uint recordId;
        uint timestamp;
        string disasterType;
        string location;
        uint severity;
        string casualties;
        string damage;
        string response;
        string additionalInfo;
    }

    event DisasterRecords__AddRecord(
        uint recordId,
        uint timestamp,
        string disasterType,
        string location,
        uint severity,
        string casualties,
        string damage,
        string response,
        string additionalInfo
    );

    event DisasterRecords__DeleteRecord(
        uint recordId,
        uint timestamp,
        string disasterType,
        string location,
        uint severity,
        string casualties,
        string damage,
        string response,
        string additionalInfo
    );

    function addRecord(
        string memory _disasterType,
        string memory _location,
        uint _severity,
        string memory _casualties,
        string memory _damage,
        string memory _response,
        string memory _additionalInfo
    ) public {
        recordId++;
        records[recordId] = Record(
            recordId,
            block.timestamp,
            _disasterType,
            _location,
            _severity,
            _casualties,
            _damage,
            _response,
            _additionalInfo
        );
        emit DisasterRecords__AddRecord(
            recordId,
            block.timestamp,
            _disasterType,
            _location,
            _severity,
            _casualties,
            _damage,
            _response,
            _additionalInfo
        );
    }

    function deleteRecord(uint _recordId) public {
        require(!isDeleted[_recordId], "The record is already deleted");
        Record storage record = records[_recordId];
        emit DisasterRecords__DeleteRecord(
            record.recordId,
            block.timestamp,
            record.disasterType,
            record.location,
            record.severity,
            record.casualties,
            record.damage,
            record.response,
            record.additionalInfo
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
            string memory,
            uint,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Record storage record = records[_recordId];
        return (
            record.timestamp,
            record.disasterType,
            record.location,
            record.severity,
            record.casualties,
            record.damage,
            record.response,
            record.additionalInfo
        );
    }

    function getRecordId() public view returns (uint) {
        return recordId;
    }

    function getTimeStamp(uint _recordId) public view returns (uint) {
        return records[_recordId].timestamp;
    }

    function getDisasterType(uint _recordId) public view returns (string memory) {
        return records[_recordId].disasterType;
    }

    function getLocation(uint _recordId) public view returns (string memory) {
        return records[_recordId].location;
    }

    function getSeverity(uint _recordId) public view returns (uint) {
        return records[_recordId].severity;
    }

    function getCasualties(uint _recordId) public view returns (string memory) {
        return records[_recordId].casualties;
    }

    function getDamage(uint _recordId) public view returns (string memory) {
        return records[_recordId].damage;
    }

    function getResponse(uint _recordId) public view returns (string memory) {
        return records[_recordId].response;
    }

    function getAdditionalInfo(uint _recordId) public view returns (string memory) {
        return records[_recordId].additionalInfo;
    }

    function getDeleted(uint256 _recordId) public view returns (bool) {
        return isDeleted[_recordId];
    }
}
