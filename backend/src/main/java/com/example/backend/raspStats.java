package com.example.backend;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://192.168.1.188:3000")
@RestController
@RequestMapping("/api")
public class raspStats {

	@GetMapping("/stats")
	public Map<String, String> getStats() throws Exception {
		Map<String, String> stats = new HashMap<>();
		// CPU TEMP
		String temp = new String(Files.readAllBytes(
					Paths.get("/sys/class/thermal/thermal_zone0/temp")));
		double celsius = Integer.parseInt(temp.trim()) / 1000.0;
		stats.put("cpuTemp", String.format("%.1f°C", celsius));

		// Memory Info
		Process memProcess = Runtime.getRuntime().exec(new String[]{"free", "-m"});
		String memOutput = new String(memProcess.getInputStream().readAllBytes());

		String[] lines = memOutput.split("\n");
		String memLine = lines[1];
		String[] parts = memLine.trim().split("\\s+");
		
		String totalMem = parts[1];
		String usedMem = parts[2];
		String freeMem = parts[3];
		stats.put("memTotal", totalMem + " MB");
		stats.put("usedMem", usedMem + " MB");
		stats.put("freeMem", freeMem + " MB");

		// Find Percent Used
		double total = Double.parseDouble(parts[1]);
		double used = Double.parseDouble(parts[2]);
		double percent = (used / total) * 100;
		stats.put("memoryUsedPercent",
				String.format("%.1f%%", percent));

		// CPU Usage
		Process cpuProcess = Runtime.getRuntime().exec(new String[]{"top", "-b", "-n", "1"});
		String cpuOutput = new String(cpuProcess.getInputStream().readAllBytes());
		String[] topLines = cpuOutput.split("\n");

		// Grabs the Hours and Days for uptime
		String cpuLine = topLines[0];
		String[] cpuPartsUptime = cpuLine.trim().split("\\s+");
		String uptimeDays = cpuPartsUptime[4];
		String uptimeMinutes = cpuPartsUptime[6];
		stats.put("uptimeDays", uptimeDays + " Days");

		//fixes hours and minutes formatting
		String uptimeMinutes2 = uptimeMinutes.replace(",","");
		if (!uptimeMinutes2.contains(":")) { 
		stats.put("uptimeMinutes", uptimeMinutes2 + " Minutes");
		} else {
			stats.put("uptimeMinutes", uptimeMinutes2 + " Hours");
		}

		// Grabs Tasks
		String cpuLine2 = topLines[1];
		String[] cpuPartsTasks = cpuLine2.trim().split("\\s+");
		String totalTasks = cpuPartsTasks[1];
		String runningTasks = cpuPartsTasks[3];
		String sleepingTasks = cpuPartsTasks[5];
		String stoppedTasks = cpuPartsTasks[7];
		stats.put("totalTasks", totalTasks);
		stats.put("runningTasks", runningTasks);
		stats.put("sleepingTasks", sleepingTasks);
		stats.put("stoppedTasks", stoppedTasks);







		stats.put("cpu", cpuOutput);

		return stats;

	}
}
