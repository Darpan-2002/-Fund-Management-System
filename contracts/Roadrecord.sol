// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RoadConstructionRecords {
    uint public recordId;
    mapping(uint => Record) records;
    mapping(uint => bool) public isDeleted;

    struct Record {
        uint recordId;
        uint timestamp;
        string projectName;
        string location;
        uint budget;
        uint progress;
        string contractor;
        string startDate;
        string estimatedCompletionDate;
        string additionalInfo;
    }

    event RoadConstructionRecords__AddRecord(
        uint recordId,
        uint timestamp,
        string projectName,
        string location,
        uint budget,
        uint progress,
        string contractor,
        string startDate,
        string estimatedCompletionDate,
        string additionalInfo
    );

    event RoadConstructionRecords__DeleteRecord(
        uint recordId,
        uint timestamp,
        string projectName,
        string location,
        uint budget,
        uint progress,
        string contractor,
        string startDate,
        string estimatedCompletionDate,
        string additionalInfo
    );

    function addRecord(
        string memory _projectName,
        string memory _location,
        uint _budget,
        uint _progress,
        string memory _contractor,
        string memory _startDate,
        string memory _estimatedCompletionDate,
        string memory _additionalInfo
    ) public {
        recordId++;
        records[recordId] = Record(
            recordId,
            block.timestamp,
            _projectName,
            _location,
            _budget,
            _progress,
            _contractor,
            _startDate,
            _estimatedCompletionDate,
            _additionalInfo
        );
        emit RoadConstructionRecords__AddRecord(
            recordId,
            block.timestamp,
            _projectName,
            _location,
            _budget,
            _progress,
            _contractor,
            _startDate,
            _estimatedCompletionDate,
            _additionalInfo
        );
    }

    function deleteRecord(uint _recordId) public {
        require(!isDeleted[_recordId], "The record is already deleted");
        Record storage record = records[_recordId];
        emit RoadConstructionRecords__DeleteRecord(
            record.recordId,
            block.timestamp,
            record.projectName,
            record.location,
            record.budget,
            record.progress,
            record.contractor,
            record.startDate,
            record.estimatedCompletionDate,
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
            record.projectName,
            record.location,
            record.budget,
            record.progress,
            record.contractor,
            record.startDate,
            record.estimatedCompletionDate,
            record.additionalInfo
        );
    }

    function getRecordId() public view returns (uint) {
        return recordId;
    }

    function getTimeStamp(uint _recordId) public view returns (uint) {
        return records[_recordId].timestamp;
    }

    function getProjectName(uint _recordId) public view returns (string memory) {
        return records[_recordId].projectName;
    }

    function getLocation(uint _recordId) public view returns (string memory) {
        return records[_recordId].location;
    }

    function getBudget(uint _recordId) public view returns (uint) {
        return records[_recordId].budget;
    }

    function getProgress(uint _recordId) public view returns (uint) {
        return records[_recordId].progress;
    }

    function getContractor(uint _recordId) public view returns (string memory) {
        return records[_recordId].contractor;
    }

    function getStartDate(uint _recordId) public view returns (string memory) {
        return records[_recordId].startDate;
    }

    function getEstimatedCompletionDate(uint _recordId) public view returns (string memory) {
        return records[_recordId].estimatedCompletionDate;
    }

    function getAdditionalInfo(uint _recordId) public view returns (string memory) {
        return records[_recordId].additionalInfo;
    }

    function getDeleted(uint256 _recordId) public view returns (bool) {
        return isDeleted[_recordId];
    }
}
