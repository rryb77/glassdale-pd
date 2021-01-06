export const Facility = (facilityObject, criminals) => {
    return `
        <div class="facility">
            <h4>${facilityObject.facilityName}</h4>
            <div class="facility__details">
                <div class="facility__security">Security: ${facilityObject.securityLevel}</div>
                <div class="facility__capacity">Capacity: ${facilityObject.capacity}</div>
                <div>
                    <h4>Criminals:</h4>
                    <ul>
                        ${criminals.map(c => `<li>${c.name}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </div>
    `
}