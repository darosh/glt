vec2 Twirl(vec2 pos, float weight, float size, vec2 center) {
    float dist = distance(pos, center);

    if(dist < size) {
        dist = pow(abs(size - dist), 2.) / size;
        float angle = 6.28318530718 * (dist / (size / weight));
        return vec2(
            (pos.x - center.x) * cos(angle) - (pos.y - pos.x) * sin(angle) + center.x + 0.5,
            (pos.y - center.y) * cos(angle) + (pos.x - pos.y) * sin(angle) + center.y + 0.5
        );
    } else {
        return pos;
    }
}

#pragma glslify:export(Twirl)
